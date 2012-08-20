
/************************************************************************/
/*				HumanBeing object definition							*/
/************************************************************************/
function humanBeing(_firstName,_lastName,_birthdate,_gender) {
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
/*				Achievement object definition							*/
/************************************************************************/
function achievement (_name,_description,_year) {
	this.name 			= _name;
	this.description 	= _description;
	this.year 			= _year;
};

achievement.prototype.print = function() {
	console.log(this.name +  ( this.description ? "\n" + this.description : ""));
};

/************************************************************************/
/*				Company object definition								*/
/************************************************************************/
function company (_name,_website,_description) {
	this.name 			= _name;
	this.website 		= _website
};


/************************************************************************/
/*				Job object definition									*/
/************************************************************************/

function job(_company, _title, _responsibilities, _startDate, _endDate) {
	this.company 			= _company;
	this.title 				= _title;
	this.responsibilities 	= _responsibilities;
	this.startDate 			= _startDate;
	this.endDate 			= _endDate;
	this.missions 			= new Array();
};

/************************************************************************/
/*				TimeLine object definition								*/
/************************************************************************/
function timeLine() {

};

timeLine.prototype.setYear = function(_year) {
	this.year = _year;
	console.log("Year set to : " + _year);
};


/************************************************************************/
/*							Script execution							*/
/************************************************************************/
var tl = new timeLine(1982);
var me = new humanBeing("Damien","Pacaud",new Date(1982,02,24),"Male");
me.setLocation("Paris, France");
tl.setYear(1997);
me.setLocation("Columbia, South Carolina");
me.addAchievement( new achievement("One Year Abroad","Lived with a host familly during one year in Columbia, SC \n- Went to high school \n- Took drama classes\n- Learned about the american culture ", 1997));
tl.setYear(2000);
me.setLocation("Paris, France");
me.addAchievement( new achievement("Bacalauréat Scientifique",null, 2000));
tl.setYear(2005);
me.setLocation("Oxford, United Kingdom");
me.addAchievement( new achievement("One more year abroad","Went to Oxford, UK for my last student year\n- Finally got my fingers on distributed computing\n- Wrote a simple website in C (using libCgi)\n- Learned about the british culture ", 1997));
tl.setYear(2006);
me.addAchievement( new achievement("Ingénieur en informatique","Diplôme d'ingénieur en informatique obtenu à Supinfo Paris ( http://www.supinfo.com )", 2006));
me.addAchievement( new achievement("Msc in computer Science","Master Of Science in Computer Science obtenu à Oxford Brookes University( http://www.brookes.ac.uk )", 2006));

