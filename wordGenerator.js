var computerChoice = ['Asia','Australia','AMERICA','Antarctica','Africa','Europe', 'Dubai', 'Egypy','hawaii',
'iceland','italy','london','malaysia','singapore','spain'];



var computerPicked = computerChoice[Math.floor(Math.random() * computerChoice.length)].toLowerCase();



module.exports = {
	computerPicked: computerPicked
};