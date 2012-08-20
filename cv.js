
/************************************************************************/
/*				HumanBeing object definition							*/
/************************************************************************/
function humanBeing(_firstName, _lastName, _birthdate, _gender) {
	this.firstName 		= _firstName;
	this.lastName 		= _lastName;
	this.birthDate 		= _birthdate;
	this.gender 		= _gender
	this.achievements 	= new Array();
	console.log("new " + _gender + " human created : \n" + _firstName + " " + _lastName + " on " + _birthdate.toDateString())
};

humanBeing.prototype.setLocation = function(_location) {
	this.location 		= _location;
	console.log("location set to : " + _location);
};

humanBeing.prototype.addAchievement = function(_achievement) {
	this.achievements.push(_achievement);
	_achievement.print();
};

/************************************************************************/
/*				Company object definition								*/
/************************************************************************/
function company (_name, _website, _description) {
	this.name 			= _name;
	this.website 		= _website
	this.description 	= _description;
};

/************************************************************************/
/*					Fact object definition								*/
/************************************************************************/
function fact(_startDate, _endDate) {
	this.startDate 		= _startDate;
	this.endDate  		= _endDate;
};

/************************************************************************/
/*				Achievement object definition							*/
/************************************************************************/
achievement.prototype = new fact();
achievement.prototype.constructor = achievement;
function achievement (_name, _description, _startDate, _endDate) {
	this.name 			= _name;
	this.description 	= _description;
	this.startDate		= _startDate;
	this.endDate 		= _endDate;
};

achievement.prototype.print = function() {
	console.log(this.name +  ( this.description ? "\n" + this.description : ""));
};

/************************************************************************/
/*				Job object definition									*/
/************************************************************************/

/**
* Job constructor
* @_company is a company object
* @_title is the job's title ie : 'Software engineer'
* @_responsibilities should be an array of String
* @_startDate should be a Date object set to the job's starting date
* @_endDate should be a Date object set to the job's ending date
**/
job.prototype = new fact();
job.prototype.constructor = job;
function job(_company, _title, _responsibilities, _startDate, _endDate) {
	this.company 			= _company;
	this.title 				= _title;
	this.responsibilities 	= _responsibilities;
	this.startDate 			= _startDate;
	this.endDate 			= _endDate;
	// The projects attribute is an array that will contain the different
	// projects that have been worked on during a job at a company
	// (one may *and should* work on different projects at the same company)
	this.projects 			= new Array();
};

job.prototype.addproject = function(project) {
	this.projects.push(project);
	project.print();
};


/************************************************************************/
/*				Project object definition								*/
/************************************************************************/
project.prototype = new fact();
project.prototype.constructor = project;
function project(_name, _description, _startDate, _endDate){
	this.name = _name;
	this.description = _description;
	this.startDate = _startDate;
	this.endDate = _endDate;
};

project.prototype.print = function() {
	console.log("Project : " + this.name + "\n" + this.startDate + " - " + this.endDate + "\n"+ this.description);
};

/************************************************************************/
/*				TimeLine object definition								*/
/************************************************************************/
function timeLine(_year) {
	this.startingYear = _year;
	this.currentYear = _year;
	this.facts = new Array();
};

timeLine.prototype.setYear = function(_year) {
	this.currentYear = _year;
	console.log("Year set to : " + _year);
};

/**
* This method adds a fact to the timeline
**/
timeLine.prototype.addFact = function(_fact) {
	this.facts.push(_fact);
};
/************************************************************************/
/*							Script execution							*/
/************************************************************************/
var tl = new timeLine(1982);
var me = new humanBeing("Damien","Pacaud",new Date(1982,02,24),"Male");
me.setLocation("Paris, France");
tl.setYear(1997);
me.setLocation("Columbia, South Carolina");
yearInTheUsa = new achievement("One Year Abroad","Lived with a host familly during one year in Columbia, SC \n- Went to high school \n- Took drama classes\n- Learned about the american culture ", new Date("24/08/1997"), new Date("22/06/1998"));
me.addAchievement(yearInTheUsa);
tl.addFact(yearInTheUsa);
tl.setYear(2000);
me.setLocation("Paris, France");
me.addAchievement( new achievement("Bacalaureat Scientifique",null, 2000));
tl.setYear(2005);
me.setLocation("Oxford, United Kingdom");
me.addAchievement( new achievement("One more year abroad","Went to Oxford, UK for my last student year\n- Finally got my fingers on distributed computing\n- Wrote a simple website in C (using libCgi)\n- Learned about the british culture ", 1997));
tl.setYear(2006);
me.addAchievement( new achievement("Ingenieur en informatique","Diplome d'ingenieur en informatique obtenu à Supinfo Paris ( http://www.supinfo.com )", 2006));
me.addAchievement( new achievement("Msc in computer Science","Master Of Science in Computer Science obtenu à Oxford Brookes University( http://www.brookes.ac.uk )", 2006));

