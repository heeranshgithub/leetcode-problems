// // 649. Dota2 Senate MEDIUM
// In the world of Dota2, there are two parties: the Radiant and the Dire.
// The Dota2 senate consists of senators coming from two parties. Now the Senate wants to decide on a change in the Dota2 game. The voting for this
// change is a round-based procedure. In each round, each senator can exercise one of the two rights:
// Ban one senator's right: A senator can make another senator lose all his rights in this and all the following rounds.
// Announce the victory: If this senator found the senators who still have rights to vote are all from the same party, he can announce the victory and decide on the change in the game.
// Given a string senate representing each senator's party belonging. The character 'R' and 'D' represent the Radiant party and the Dire party. Then if there are n senators,
// the size of the given string will be n.
// The round-based procedure starts from the first senator to the last senator in the given order. This procedure will last until the end of voting. All the senators who have lost their
// rights will be skipped during the procedure.
// Suppose every senator is smart enough and will play the best strategy for his own party. Predict which party will finally announce the victory and change the Dota2 game. The output should
// be "Radiant" or "Dire".
// https://leetcode.com/problems/dota2-senate/description/?envType=study-plan-v2&envId=leetcode-75

const senate0 = "RD" // -> Radiant
const senate1 = "RDD" // -> Dire
const senate2 = "DRRD" // -> Dire
const senate3 = "RDRDRDD" // -> Radiant
const senate4 = "DDRRR" // -> Dire

var predictPartyVictory = function (senate) {
  let queue = [[senate[0], false]] // keeping hasVoted to be false until that member stops another party member from entering the queue
  let pointer = 1

  console.log(queue)
  while (pointer < senate.length) {
    const [partyMemberInQueue, hasVoted] = queue[0]
    const partyMemberComingInQueue = senate[pointer]
    console.log(partyMemberComingInQueue)
    if (partyMemberInQueue === partyMemberComingInQueue) {
      if (queue[0][1]) {
        // if member at the front of the same party has used their voting power in this round already, then move them out of front
        queue[0][1] = false
        queue.push([partyMemberComingInQueue, true])
      } else queue.push([partyMemberComingInQueue, false])
    } else {
      //clash of different part members
      if (!hasVoted) {
        // then won't let the other party member come in the queue, so won't get added into the queue
        queue[0][1] = true // setting hasVoted to true for the party member at the front of the queue as it stops the newMember from entering
        const front = queue.shift()
        queue.push(front)
      } else {
        // party member at the front has already voted. so now it can't stop the party member from entering the queue. and partyMemberComingInQueue also removes the party Member who was at the front of the queue and had already voted.
        queue.shift()
        queue.push([partyMemberComingInQueue, true]) //as the partyMemberComingInQueue has already voted, it goes in the queue with hasVoted as true
      }
    }
    console.log(queue)
    pointer++

    if (pointer === senate.length && queue.length > 1) {
      console.log(queue)
      let diresCount = 0, radiantsCount = 0
      senate = ""
      pointer = 1
      for (const [partyMember, hasVoted] of queue) {
        senate += partyMember
        if (partyMember === 'D') diresCount++
        else radiantsCount++
      }
      if (diresCount === 0) return 'Radiant'
      else if (radiantsCount === 0) return 'Dire'
      queue = [[senate[0], false]]
      console.log(senate)
    }
  }

  return queue.shift()[0] === "D" ? "Dire" : "Radiant"
}

console.log(predictPartyVictory(senate3)) //"RDRDRDD" // -> Radiant
