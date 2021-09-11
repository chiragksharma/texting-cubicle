//Emails
const targetDiv = document.getElementById("mailtemp");
const btn = document.getElementById("btnmail");
btn.onclick = function() {
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
    } else {
        targetDiv.style.display = "block";
    }
    targetDiv1.style.display = "none";
    targetDiv2.style.display = "none";
    targetDiv3.style.display = "none";

};


//Linkdin
const targetDiv1 = document.getElementById("link");
const btn1 = document.getElementById("btnlink");
btn1.onclick = function() {
    if (targetDiv1.style.display !== "none") {
        targetDiv1.style.display = "none";
    } else {
        targetDiv1.style.display = "block";
    }
    targetDiv.style.display = "none";
    targetDiv2.style.display = "none";
    targetDiv3.style.display = "none";

};

//Whatsapp
const targetDiv2 = document.getElementById("whatsapp");
const btn2 = document.getElementById("btnwhatsapp");
btn2.onclick = function() {
    if (targetDiv2.style.display !== "none") {
        targetDiv2.style.display = "none";
    } else {
        targetDiv2.style.display = "block";
    }
    targetDiv.style.display = "none";
    targetDiv1.style.display = "none";
    targetDiv3.style.display = "none";

};

//Social Media Reply
const targetDiv3 = document.getElementById("smreply");
const btn3 = document.getElementById("btnsmreply");
btn3.onclick = function() {
    if (targetDiv3.style.display !== "none") {
        targetDiv3.style.display = "none";
    } else {
        targetDiv3.style.display = "block";
    }
    targetDiv.style.display = "none";
    targetDiv1.style.display = "none";
    targetDiv2.style.display = "none";

};



//-------------------------------> EMAIL BUTTONS

//JOB OFFER
const joboffer = document.getElementById("joboffer");
const btnjo = document.getElementById("btnjo");
btnjo.onclick = function() {
    if (joboffer.style.display !== "none") {
        joboffer.style.display = "none";
    } else {
        joboffer.style.display = "block";
    }
};

//Linkedin

const linkedin = document.getElementById("linkedin");
const linkbtn1 = document.getElementById("linkbtn1");
linkbtn1.onclick = function() {
    if (linkedin.style.display !== "none") {
        linkedin.style.display = "none";
    } else {
        linkedin.style.display = "block";
    }
};