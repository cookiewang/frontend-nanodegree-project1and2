var bio = {
    "name": "Frank Wang",
    "role": "Java Developer",
    "contacts": {
        "mobile": "123-234-2345",
        "github": "Frank",
        "email": "someone@att.com",
        "twitter": "@something",
        "location": "Dallas"
    },
    "welcomMessage": "Welcome to my website",
    "skills": ["Java Programming", "CSS3", "HTML5", "Project C", "jQuery", "C++"],
    "bioPic": "images/fry.jpg",
    "display":function () {
        if (bio.contacts) {
            if (bio.contacts.mobile) {
                $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
                $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));

            }
            if (bio.contacts.email) {
                $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
                $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.mobile));
            }
            if (bio.contacts.github) {
                $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
                $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.mobile));
            }
            if (bio.contacts.twitter) {
                 $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.mobile));
                $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
            }
            if (bio.contacts.location) {
                $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
                $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.mobile));
            }
            $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
            $("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomMessage));
        }

        if (bio.skills) {
            if (bio.skills.length > 0) {

                $("#header").append(HTMLskillsStart);
                for (var i = 0; i < bio.skills.length; i++) {
                    $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
                }
            }
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "AT&T",
            "title": "Java Developer",
            "dates": "2001 - Current",
            "location": "Richardson",
            "description": "Defines site objectives by analyzing user requirements; envisioning system features and functionality." +
                "Designs and develops user interfaces to internet/intranet applications by setting expectations and features priorities " +
                "throughout development life cycle; determining design methodologies and tool sets; completing programming using " +
                "languages and software products; designing and conducting tests. Recommends system solutions by comparing " +
                "advantages and disadvantages of custom development and purchase alternatives."
        },
        {
            "employer": "Prelude system, inc",
            "title": "Java Developer",
            "dates": "2000 - 2001",
            "location": "Richardson",
            "description": "Defines site objectives by analyzing user requirements; envisioning system features and functionality." +
                "Designs and develops user interfaces to internet/intranet applications by setting expectations and features priorities " +
                "throughout development life cycle; determining design methodologies and tool sets; completing programming using " +
                "languages and software products; designing and conducting tests. Recommends system solutions by comparing " +
                "advantages and disadvantages of custom development and purchase alternatives."
        },
        {
            "employer": "MEMC Southwest",
            "title": "Java Developer",
            "dates": "1999 - 2000",
            "location": "Sherman, Texas, US",
            "description": "Defines site objectives by analyzing user requirements; envisioning system features and functionality." +
                "Designs and develops user interfaces to internet/intranet applications by setting expectations and features priorities " +
                "throughout development life cycle; determining design methodologies and tool sets; completing programming using " +
                "languages and software products; designing and conducting tests. Recommends system solutions by comparing " +
                "advantages and disadvantages of custom development and purchase alternatives."
        }
    ],
    "display":function() {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var workTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var workDes = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            var workDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var employerTitle = employer + workTitle;
            $(".work-entry:last").append(employerTitle);
            $(".work-entry:last").append(workDates);
            $(".work-entry:last").append(workDes);
        }
    }

};

var projects = {
    "projects": [
        {
            "title": "Order Track",
            "dates": "2014",
            "description": "This is a mobile application designed for on-site technicians. " +
                "It provides the functions of inventory search, " +
                "order details lookup and order status update.",
            "images": ["images/att01.png", "images/att01.png"]
        },
        {
            "title": "Data Life Control",
            "dates": "2013",
            "description": "This is a mobile application designed for on-site technicians. " +
                "It provides the functions of inventory search, " +
                "order details lookup and order status update.",
            "images": ["images/att.png", "images/att.png"]
        }
    ],
    "display": function () {
        $("#projects").append(HTMLprojectStart);
        for (number in projects.projects) {
            var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[number].title);
            var projectDate = HTMLprojectDates.replace("%data%", projects.projects[number].dates);
            var projectDesc = HTMLprojectDescription.replace("%data%", projects.projects[number].description);
            $(".project-entry:last").append(projectTitle);
            $(".project-entry:last").append(projectDate);
            $(".project-entry:last").append(projectDesc);
            var projectImages = projects.projects[number].images;
            for (image in projectImages) {
                var projectImage = HTMLprojectImage.replace("%data%", projectImages[image]);
                $(".project-entry:last").append(projectImage);
            }

        }
    }
}
var education = {
    "schools": [
        {
            "name": "Henan University",
            "degree": "BA",
            "major": ["History"],
            "url": "http://www.haust.edu.cn/english",
            "dates": 1995,
            "location": "Kaifeng, Henan, China"
        },
        {
            "name": "Texas A&M Commerce",
            "degree": "Master",
            "major": ["Computer Science"],
            "url": "http://www.tamuc.edu/",
            "dates": 1997,
            "location": "Commerce, Texas, US"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Syntax",
            "school": "Udacity",
            "dates": 2015,
            "url": "http://www.udacity.com/course/ud804"
        }
    ],
    "display": function () {
        $("#education").append(HTMLschoolStart);
        for (s in education.schools) {
            var schoolName = HTMLschoolName.replace("%data%", education.schools[s].name);
            var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[s].degree);
            var schoolDates = HTMLschoolDates.replace("%data%", ""+education.schools[s].dates);
            var schNameDegree = schoolName + schoolDegree;

            $(".education-entry:last").append(schNameDegree);
            $(".education-entry:last").append(schoolDates);
            var schoolMajor = education.schools[s].major;
            for (m in schoolMajor) {
                var major = HTMLschoolMajor.replace("%data%", schoolMajor[m]);
                $(".education-entry:last").append(major);
            }

        }
        if(education.onlineCourses){
            $(".education-entry:last").append(HTMLonlineClasses);
        }
        for (online in education.onlineCourses) {
            var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
            var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
            var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
            var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
            var onlineTitleSchool = onlineTitle + onlineSchool;

            $(".education-entry:last").append(onlineTitleSchool);
            $(".education-entry:last").append(onlineDates);
            $(".education-entry:last").append(onlineURL);
         }
    }
};

projects.display();
bio.display();
work.display();
education.display();

var charEscape = function (_html) {
    var newHTML = _html;
    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");
    return newHTML;
};

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);