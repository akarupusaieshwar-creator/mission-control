export type Difficulty = "Easy" | "Medium" | "Hard";

export type Question = {
  title: string;
  link: string;
  difficulty: Difficulty;
  topic: string;
  landmark?: boolean;
};

export const questions: Question[] = [
  { title: "Two Sum", link: "https://leetcode.com/problems/two-sum/", difficulty: "Easy", topic: "Arrays", landmark: true },
  { title: "Best Time to Buy and Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: "Easy", topic: "Arrays", landmark: true },
  { title: "Contains Duplicate", link: "https://leetcode.com/problems/contains-duplicate/", difficulty: "Easy", topic: "Arrays" },
  { title: "3Sum", link: "https://leetcode.com/problems/3sum/", difficulty: "Medium", topic: "Arrays", landmark: true },
  { title: "Product of Array Except Self", link: "https://leetcode.com/problems/product-of-array-except-self/", difficulty: "Medium", topic: "Arrays" },
  { title: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/", difficulty: "Medium", topic: "Arrays", landmark: true },
  { title: "Merge Intervals", link: "https://leetcode.com/problems/merge-intervals/", difficulty: "Medium", topic: "Arrays", landmark: true },
  { title: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Hard", topic: "Arrays", landmark: true },
  { title: "First Missing Positive", link: "https://leetcode.com/problems/first-missing-positive/", difficulty: "Hard", topic: "Arrays" },

  { title: "Valid Palindrome", link: "https://leetcode.com/problems/valid-palindrome/", difficulty: "Easy", topic: "Strings" },
  { title: "Longest Common Prefix", link: "https://leetcode.com/problems/longest-common-prefix/", difficulty: "Easy", topic: "Strings" },
  { title: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/", difficulty: "Easy", topic: "Strings", landmark: true },
  { title: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", difficulty: "Medium", topic: "Strings", landmark: true },
  { title: "Longest Palindromic Substring", link: "https://leetcode.com/problems/longest-palindromic-substring/", difficulty: "Medium", topic: "Strings", landmark: true },
  { title: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/", difficulty: "Medium", topic: "Strings" },
  { title: "Minimum Window Substring", link: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Hard", topic: "Strings", landmark: true },
  { title: "Regular Expression Matching", link: "https://leetcode.com/problems/regular-expression-matching/", difficulty: "Hard", topic: "Strings" },

  { title: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/", difficulty: "Easy", topic: "Linked Lists" },
  { title: "Linked List Cycle", link: "https://leetcode.com/problems/linked-list-cycle/", difficulty: "Easy", topic: "Linked Lists" },
  { title: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/", difficulty: "Easy", topic: "Linked Lists", landmark: true },
  { title: "Add Two Numbers", link: "https://leetcode.com/problems/add-two-numbers/", difficulty: "Medium", topic: "Linked Lists", landmark: true },
  { title: "Remove Nth Node From End of List", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", difficulty: "Medium", topic: "Linked Lists" },
  { title: "Merge k Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Hard", topic: "Linked Lists", landmark: true },
  { title: "Reverse Nodes in k-Group", link: "https://leetcode.com/problems/reverse-nodes-in-k-group/", difficulty: "Hard", topic: "Linked Lists" },

  { title: "Maximum Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", difficulty: "Easy", topic: "Trees", landmark: true },
  { title: "Invert Binary Tree", link: "https://leetcode.com/problems/invert-binary-tree/", difficulty: "Easy", topic: "Trees" },
  { title: "Binary Tree Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", difficulty: "Medium", topic: "Trees", landmark: true },
  { title: "Lowest Common Ancestor of a Binary Tree", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", difficulty: "Medium", topic: "Trees", landmark: true },
  { title: "Validate Binary Search Tree", link: "https://leetcode.com/problems/validate-binary-search-tree/", difficulty: "Medium", topic: "Trees" },
  { title: "Binary Tree Maximum Path Sum", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", difficulty: "Hard", topic: "Trees", landmark: true },
  { title: "Serialize and Deserialize Binary Tree", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", difficulty: "Hard", topic: "Trees" },

  { title: "Flood Fill", link: "https://leetcode.com/problems/flood-fill/", difficulty: "Easy", topic: "Graphs" },
  { title: "Find if Path Exists in Graph", link: "https://leetcode.com/problems/find-if-path-exists-in-graph/", difficulty: "Easy", topic: "Graphs" },
  { title: "Number of Islands", link: "https://leetcode.com/problems/number-of-islands/", difficulty: "Medium", topic: "Graphs", landmark: true },
  { title: "Course Schedule", link: "https://leetcode.com/problems/course-schedule/", difficulty: "Medium", topic: "Graphs", landmark: true },
  { title: "Clone Graph", link: "https://leetcode.com/problems/clone-graph/", difficulty: "Medium", topic: "Graphs" },
  { title: "Word Ladder", link: "https://leetcode.com/problems/word-ladder/", difficulty: "Hard", topic: "Graphs", landmark: true },
  { title: "Critical Connections in a Network", link: "https://leetcode.com/problems/critical-connections-in-a-network/", difficulty: "Hard", topic: "Graphs" },

  { title: "Binary Search", link: "https://leetcode.com/problems/binary-search/", difficulty: "Easy", topic: "Binary Search", landmark: true },
  { title: "Search Insert Position", link: "https://leetcode.com/problems/search-insert-position/", difficulty: "Easy", topic: "Binary Search" },
  { title: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Medium", topic: "Binary Search", landmark: true },
  { title: "Koko Eating Bananas", link: "https://leetcode.com/problems/koko-eating-bananas/", difficulty: "Medium", topic: "Binary Search", landmark: true },
  { title: "Find Minimum in Rotated Sorted Array", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", difficulty: "Medium", topic: "Binary Search" },
  { title: "Median of Two Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/", difficulty: "Hard", topic: "Binary Search", landmark: true },
  { title: "Split Array Largest Sum", link: "https://leetcode.com/problems/split-array-largest-sum/", difficulty: "Hard", topic: "Binary Search" },

  { title: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Easy", topic: "Stacks", landmark: true },
  { title: "Implement Queue using Stacks", link: "https://leetcode.com/problems/implement-queue-using-stacks/", difficulty: "Easy", topic: "Stacks" },
  { title: "Min Stack", link: "https://leetcode.com/problems/min-stack/", difficulty: "Medium", topic: "Stacks" },
  { title: "Daily Temperatures", link: "https://leetcode.com/problems/daily-temperatures/", difficulty: "Medium", topic: "Stacks", landmark: true },
  { title: "Evaluate Reverse Polish Notation", link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", difficulty: "Medium", topic: "Stacks", landmark: true },
  { title: "Largest Rectangle in Histogram", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/", difficulty: "Hard", topic: "Stacks", landmark: true },
  { title: "Basic Calculator", link: "https://leetcode.com/problems/basic-calculator/", difficulty: "Hard", topic: "Stacks" },

  { title: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/", difficulty: "Easy", topic: "Dynamic Programming", landmark: true },
  { title: "House Robber", link: "https://leetcode.com/problems/house-robber/", difficulty: "Medium", topic: "Dynamic Programming", landmark: true },
  { title: "Coin Change", link: "https://leetcode.com/problems/coin-change/", difficulty: "Medium", topic: "Dynamic Programming", landmark: true },
  { title: "Longest Increasing Subsequence", link: "https://leetcode.com/problems/longest-increasing-subsequence/", difficulty: "Medium", topic: "Dynamic Programming", landmark: true },
  { title: "Unique Paths", link: "https://leetcode.com/problems/unique-paths/", difficulty: "Medium", topic: "Dynamic Programming" },
  { title: "Edit Distance", link: "https://leetcode.com/problems/edit-distance/", difficulty: "Medium", topic: "Dynamic Programming" },
  { title: "Burst Balloons", link: "https://leetcode.com/problems/burst-balloons/", difficulty: "Hard", topic: "Dynamic Programming", landmark: true },

  { title: "Last Stone Weight", link: "https://leetcode.com/problems/last-stone-weight/", difficulty: "Easy", topic: "Heaps" },
  { title: "Kth Largest Element in a Stream", link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/", difficulty: "Easy", topic: "Heaps", landmark: true },
  { title: "Kth Largest Element in an Array", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/", difficulty: "Medium", topic: "Heaps", landmark: true },
  { title: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Medium", topic: "Heaps", landmark: true },
  { title: "Find Median from Data Stream", link: "https://leetcode.com/problems/find-median-from-data-stream/", difficulty: "Hard", topic: "Heaps", landmark: true },

  { title: "Binary Tree Paths", link: "https://leetcode.com/problems/binary-tree-paths/", difficulty: "Easy", topic: "Backtracking" },
  { title: "Subsets", link: "https://leetcode.com/problems/subsets/", difficulty: "Medium", topic: "Backtracking", landmark: true },
  { title: "Combination Sum", link: "https://leetcode.com/problems/combination-sum/", difficulty: "Medium", topic: "Backtracking", landmark: true },
  { title: "Word Search", link: "https://leetcode.com/problems/word-search/", difficulty: "Medium", topic: "Backtracking" },
  { title: "N-Queens", link: "https://leetcode.com/problems/n-queens/", difficulty: "Hard", topic: "Backtracking", landmark: true },
];
