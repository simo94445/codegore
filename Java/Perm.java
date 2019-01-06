import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Perm {

    private final static String file = "/wordlist.txt";

    /**
     * List permutations of a string.
     *
     * @param s the input string
     * @return  the list of permutations
     */
    private static Set<String> permutation(String s) {
        // The result
        Set<String> res = new HashSet<String>();
        // If input string's length is 1, return {s}
        if (s.length() == 1) {
            res.add(s);
        } else if (s.length() > 1) {
            int lastIndex = s.length() - 1;
            // Find out the last character
            String last = s.substring(lastIndex);
            // Rest of the string
            String rest = s.substring(0, lastIndex);
            // Perform permutation on the rest string and
            // merge with the last character
            res = merge(permutation(rest), last);
        }
        return res;
    }

    /**
     * @param list a result of permutation, e.g. {"ab", "ba"}
     * @param c    the last character
     * @return     a merged new list, e.g. {"cab", "acb" ... }
     */
    private static Set<String> merge(Set<String> list, String c) {
        Set<String> res = new HashSet<>();
        // Loop through all the string in the list
        for (String s : list) {
            // For each string, insert the last character to all possible positions
            // and add them to the new list
            for (int i = 0; i <= s.length(); ++i) {
                String ps = new StringBuffer(s).insert(i, c).toString();
                res.add(ps);
            }
        }
        return res;
    }

    public static void main(String[] args) {
		final long startTime = System.currentTimeMillis();
        HashSet<String> dict = (HashSet<String>) makeHashMap(file);
        Scanner scan = new Scanner(System.in);
        String scram = scan.nextLine().toLowerCase();

        Set<String> perms = permutation(scram);
        Set<String> result = new HashSet<String>();

        for (String s : perms) {
            for (int i = 0; i <= s.length(); i++) {
                for (int j = i; j <= s.length(); j++) {
                    if ((j > i + 2) && dict.contains(s.substring(i, j)))
                        result.add(s.substring(i, j));
                }
            }
        }

		for (int i = 3; i < 7; i++) {
			System.out.print("Length " + i + " : ");
			for (String s : result) {
				if (s.length() == i)
					System.out.print(s + " ");
			}
			System.out.println();
		}
		final long endTime = System.currentTimeMillis();
		
		System.out.println("Execution time: " + (endTime - startTime) + " miliseconds.");
    }

    private static Set<String> makeHashMap(String filename) {
        Set<String> map = new HashSet<String>(70000);
		InputStream in = null;
        BufferedReader br = null;
        try {
			in = Perm.class.getResourceAsStream(filename);
            br = new BufferedReader(new InputStreamReader(in));
            String line = br.readLine().toLowerCase();
            while (line != null) {
                map.add(line);
                line = br.readLine();
            }
        } catch (IOException ioe) {
            ioe.printStackTrace();
        } finally {
            try { br.close(); in.close();}
            catch (IOException e) { System.exit(1); }
        }
        return map;
    }
}