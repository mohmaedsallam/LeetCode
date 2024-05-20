/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // If s1 is larger than s2, then match is not possible
    // i.e., s1 cannot be a substring of s2
    if (s1.length > s2.length) return false;

    let neededChar = {};
    // To store the frequency/count of required string s1
    for (let i = 0; i < s1.length; i++) {
        // Initially neededChar[s1[i]] will be undefined, and
        // undefined || 0 will return 0. So we increment it by 1
        neededChar[s1[i]] = (neededChar[s1[i]] || 0) + 1;
    }
    /* Now we have neededChar, i.e., neededChar = { a: 1, b: 1 } */

    let left = 0, // Left pointer/index of the sliding window
        right = 0, // Right pointer/index of the sliding window
        requiredLength = s1.length; // Length of the substring required in s2

    // Now iterate until the right index of the window is less than the length of s2
    while (right < s2.length) {
        // If we found an s2 character in s1 (i.e., in neededChar), then we decrease requiredLength
        if (neededChar[s2[right]] > 0) requiredLength--;

        // Since we have encountered a new character (s2[right]), we decrease its
        // count in neededChar, even if it is not present in neededChar, because we only care about neededChars
        neededChar[s2[right]]--;
        right++; // Window is incremented by 1 step

        // Now, if our requiredLength becomes 0, it means we have found a match of the s2 substring
        // So we return true
        if (requiredLength === 0) return true;

        // If our window length is equal to s1.length (length of the string to search in s2),
        // then we have to remove the left element of the window (left++) and add a new element from the right
        // (which will be added in the next iteration)
        if (right - left === s1.length) {
            // If the left element we are removing was a required character, then we increase requiredLength
            // because that element will no longer be part of the sliding window
            if (neededChar[s2[left]] >= 0) requiredLength++;

            // We will also increase the count of the left element removed from the window
            neededChar[s2[left]]++;

            // And finally, we will decrease the window size by 1 from the left (left++)
            left++;
        }
    }

    // If a match was not found, we return false
    return false;
};

/* The same approach is used in Q438: https://leetcode.com/problems/find-all-anagrams-in-a-string/ */