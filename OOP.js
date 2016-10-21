function gradeBook (theName, theClass) {

	    this.names = theName;
	    this.userClass = theClass;
	    this.quizScores = [];
	    this.currentScore = 0;

	}
	gradeBook.prototype = {
	    constructor: gradeBook,
	    saveScore:function (addQuizScore)  {
	        this.quizScores.push(addQuizScore);
	    },
	    showNameAndScores:function ()  {
	        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
	        return this.names + " Quiz Scores: " + scores;
	    },
	    changeclass:function (newClass)  {
	        this.userClass = newClass;
	        return "New class Saved: " + this.userClass;
	    }
	}//User prototype to create new instances of the user;