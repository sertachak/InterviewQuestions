/*Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.*/

function checkMagazine(magazine, note) {
    let dic = {};
    for (let i = 0; i < magazine.length; i++) {
        if (dic[magazine[i]]) {
            dic[magazine[i]] = dic[magazine[i]] + 1;
        }
        else {
            dic[magazine[i]] = 1;
        }
    }
    //console.log(dic);
    for (let i = 0; i < note.length; i++) {
        if (dic[note[i]] >= 1) {
            dic[note[i]] = dic[note[i]] -1;
        }
        else {
            console.log("No");
            return;
        }
    }
    console.log("Yes");
}