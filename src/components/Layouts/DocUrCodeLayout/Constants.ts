import { Doc } from "../../../utils/parsers/parser";

export const DEFAULT_DOCS: Doc[] = [
  {
    start: 2,
    end: 8,
    body: "The twoSum method begins by creating an empty hashmap on line 3.",
  },
  {
    start: 4,
    end: 8,
    body: "The method then iterates over each element i in the input list nums using a for loop on line 4.",
  },
  {
    start: 5,
    end: 5,
    body: "For each element, it calculates the complement (the difference between the target and the current element) and stores it in the complement variable on line 5.",
  },
  {
    start: 6,
    end: 6,
    body: "It checks if the complement exists in the hashmap by using the in operator on line 6. If it does exist, it means a pair of numbers are found that add up to the target.",
  },
  {
    start: 7,
    end: 7,
    body: "In that case, the method returns a list containing the current index (i) and the index of the complement that was found in the hashmap (hashmap[complement]).",
  },
  {
    start: 8,
    end: 8,
    body: "If the complement is not in the hashmap, it means no pair of numbers have been found yet that add up to the target. So it adds the current element nums[i] as a key to the hashmap and the current index i as its value on line 8. This allows the code to keep track of previously encountered numbers for future iterations.",
  },
];