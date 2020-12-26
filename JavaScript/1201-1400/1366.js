'use strict'
const test = require('../test.js').test
/*
  In a special ranking system, each voter gives a rank from highest to lowest to all teams participated in the competition.
  The ordering of teams is decided by who received the most position-one votes.
    If two or more teams tie in the first position, we consider the second position to resolve the conflict,
    if they tie again, we continue this process until the ties are resolved.
    If two or more teams are still tied after considering all positions, we rank them alphabetically based on their team letter.

  Given an array of strings votes which is the votes of all voters in the ranking systems. Sort all teams according to the ranking system described above.
  Return a string of all teams sorted by the ranking system.

  Example 1:
    Input: votes = ["ABC","ACB","ABC","ACB","ACB"]
    Output: "ACB"
    Explanation:
      Team A was ranked first place by 5 voters. No other team was voted as first place so team A is the first team.
      Team B was ranked second by 2 voters and was ranked third by 3 voters.
      Team C was ranked second by 3 voters and was ranked third by 2 voters.
      As most of the voters ranked C second, team C is the second team and team B is the third.

  Example 2:
    Input: votes = ["WXYZ","XYZW"]
    Output: "XWYZ"
    Explanation: X is the winner due to tie-breaking rule. X has same votes as W for the first position
    but X has one vote as second position while W doesn't have any votes as second position.

  Example 3:
    Input: votes = ["ZMNAGUEDSJYLBOPHRQICWFXTVK"]
    Output: "ZMNAGUEDSJYLBOPHRQICWFXTVK"
    Explanation: Only one voter so his votes are used for the ranking.

  Example 4:
    Input: votes = ["BCA","CAB","CBA","ABC","ACB","BAC"]
    Output: "ABC"
    Explanation:
    Team A was ranked first by 2 voters, second by 2 voters and third by 2 voters.
    Team B was ranked first by 2 voters, second by 2 voters and third by 2 voters.
    Team C was ranked first by 2 voters, second by 2 voters and third by 2 voters.
    There is a tie and we rank teams ascending by their IDs.

  Example 5:
    Input: votes = ["M","M","M","M"]
    Output: "M"
    Explanation: Only team M in the competition so it has the first rank.

  Constraints:
    1 <= votes.length <= 1000
    1 <= votes[i].length <= 26
    votes[i].length == votes[j].length for 0 <= i, j < votes.length.
    votes[i][j] is an English upper-case letter.
    All characters of votes[i] are unique.
    All the characters that occur in votes[0] also occur in votes[j] where 1 <= j < votes.length.
 */

function rankTeams (votes) {
  const len = votes.length
  if (len == 1) return votes[0]
  const numOfTeams = votes[0].length
  if (numOfTeams == 1) return votes[0]
  const arrCache = {}

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < numOfTeams; j++) {
      const team = votes[i][j]

      if (arrCache[team] === undefined) arrCache[team] = new Array(numOfTeams).fill(0)
      arrCache[team][j]++
    }
  }

  const sortedA = Object.keys(arrCache).sort((a, b) => {
    /*
      iterate from first to last
      compare the count of 1st place between a and b (two teams)
      return b - a for most votes to least
    */
    for (let i = 0; i < numOfTeams; i++) {
      if (arrCache[a][i] !== arrCache[b][i]) {
        // console.log(a, b, i, arrCache[a][i], arrCache[b][i]);
        return arrCache[b][i] - arrCache[a][i]
      }
    }

    /*
      if count is the same
      return alphabetical order of teams
    */
    if (a < b) {
      return -1
    } else {
      return 1
    }
  })

  return sortedA.join('')
};

function map (votes) {
  const len = votes.length
  if (len == 1) return votes[0]
  const numOfTeams = votes[0].length
  if (numOfTeams == 1) return votes[0]

  const map = new Map()

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < numOfTeams; j++) {
      const team = votes[i][j]

      /*
        map the team with an array representing their rankings
        A -> [0, 0, 0]
      */
      if (!map.has(team)) map.set(team, new Array(numOfTeams).fill(0))
      map.get(team)[j]++
    }
  }

  const sortedC = [...map.keys()].sort((a, b) => {
    for (let i = 0; i < numOfTeams; i++) { if (map.get(a)[i] != map.get(b)[i]) return map.get(b)[i] - map.get(a)[i] }

    if (a < b) return -1
    else return 1
  })
  return sortedC.join('')
}

function obj (votes) {
  const len = votes.length
  if (len == 1) return votes[0]
  const numOfTeams = votes[0].length
  if (numOfTeams == 1) return votes[0]
  const objCache = {}

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < numOfTeams; j++) {
      const team = votes[i][j]

      if (!(team in objCache)) objCache[team] = { [j]: 1 }
      else objCache[team][j] ? objCache[team][j]++ : objCache[team][j] = 1
    }
  }

  const sortedB = Object.keys(objCache).sort((a, b) => {
    for (let i = 0; i < numOfTeams; i++) {
      if (objCache[a][i] && objCache[b][i] && objCache[a][i] !== objCache[b][i]) {
        // console.log(objCache[b][i], objCache[a][i]);
        return objCache[b][i] - objCache[a][i]
      } else if (!objCache[a][i] && objCache[b][i]) {
        return objCache[b][i]
      } else if (!objCache[b][i] && objCache[a][i]) {
        return 0 - objCache[a][i]
      }
    }
    if (a < b) return -1
    else return 1
  })

  return sortedB.join('')
};

test(
  // rankTeams(["ABC", "ACB", "ABC", "ACB", "ACB"]), // ACB
  // rankTeams(["WXYZ", "XYZW"]), // XWYZ
  // rankTeams(["ZMNAGUEDSJYLBOPHRQICWFXTVK"]), // ZMNAGUEDSJYLBOPHRQICWFXTVK
  // rankTeams(["BCA", "CAB", "CBA", "ABC", "ACB", "BAC"]), // ABC

  // map(["ABC", "ACB", "ABC", "ACB", "ACB"]),
  // map(["WXYZ", "XYZW"]),
  // map(["ZMNAGUEDSJYLBOPHRQICWFXTVK"]),
  // map(["BCA", "CAB", "CBA", "ABC", "ACB", "BAC"]), // ABC

  // obj(["ABC", "ACB", "ABC", "ACB", "ACB"]),
  // obj(["WXYZ", "XYZW"]),
  // obj(["ZMNAGUEDSJYLBOPHRQICWFXTVK"]),
  obj(['BCA', 'CAB', 'CBA', 'ABC', 'ACB', 'BAC']) // ABC
)
