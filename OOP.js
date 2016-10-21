function gradeBook (theName, theClass) {
	    this.name = theName;
	    this.class = theClass;
	    this.quizScores = [];
	    this.currentScore = 0;
	}
	​
	gradeBook.prototype = {
	    constructor: User,
	    saveScore:function (addQuizScore)  {
	        this.quizScores.push(theScoreToAdd);
	    },
	    showNameAndScores:function ()  {
	        var scores = this.quizScore.length > 0 ? this.quizScore.join(",") : "No Scores Yet";
	        return this.name + " Quiz Scores: " + scores;
	    },
	    changeclass:function (newclass)  {
	        this.class = newclass;
	        return "New class Saved: " + this.class;
	    }
	}//User prototype to create new instances of the user;