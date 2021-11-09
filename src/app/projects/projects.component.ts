import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  focusEle
  constructor() { }

  ngOnInit(): void {
    var ele = document.getElementById('scroller');
    ele.addEventListener("click", this.checkScrollDirection);

    var eleSelect = document.getElementById("selectCat") as HTMLSelectElement;
    eleSelect.onchange = function(){
    
    var setnone = document.getElementsByTagName("span");
    //console.log(setnone);
    for(let z=0; z<setnone.length; z++){
      setnone[z].style.display = "none";
    }

      switch(eleSelect.value) {
        //Projects
        case 'Showtimes':
          for(let z=0; z<setnone.length; z++){
            setnone[z].style.display = "block";
          }
        break;
        case 'Corporate':
          document.getElementById("spanC1").style.display = "block";
          document.getElementById("spanC2").style.display = "block";
          document.getElementById("spanC3").style.display = "block";
          document.getElementById("spanC4").style.display = "block";
          document.getElementById("spanC5").style.display = "block";
        break;
        case 'Freelance':
          document.getElementById("spanF1").style.display = "block";
          document.getElementById("spanF2").style.display = "block";
          document.getElementById("spanF3").style.display = "block";
          document.getElementById("spanF4").style.display = "block";
          document.getElementById("spanF5").style.display = "block";
        break;
        case 'Games':
          document.getElementById("spanG1").style.display = "block";
          document.getElementById("spanG2").style.display = "block";
          document.getElementById("spanG3").style.display = "block";
          document.getElementById("spanG4").style.display = "block";
        break;
        case 'Projects':
          document.getElementById("spanP1").style.display = "block";
          document.getElementById("spanP2").style.display = "block";
          document.getElementById("spanP3").style.display = "block";
          document.getElementById("spanP4").style.display = "block";
        break;
      }
      
    };
  }

  checkScrollDirection(e){
    var id = e.target['id'];
    //console.log(e.target)
    if(this.focusEle != id && id != "" && id != null && id != "scroller"){  

      this.focusEle = id;
      var eles = document.getElementsByClassName('positionFocus')
      for(let z=0; z<eles.length; z++){
        eles[z].className = "positionOrgin"
      }

      var ele = document.getElementById(id).className = "positionFocus";


      var eleupdate = document.getElementById('noActionZoneImage')
      eleupdate.className = "noActionZoneBackgroundImageFocus";

      document.getElementById('pop1').style.display = "inline-block";
      document.getElementById('pop2').style.display = "inline-block";
      document.getElementById('pop3').style.display = "inline-block";

      var spanText;  
      switch(e.target['id']) {
        //Projects
        case 'spanP1':
          spanText = "JavaScript Robotics & Computer Vision Project\n(JSmpeg, opencv, python )"
          break;
        case 'spanP2':
          spanText = "Security Camera Systems - Object Recognition"
          break;
        case 'spanP3':
          spanText = "Audio Notecards"
          break;
        case 'spanP4':
          spanText = "Zmovies"
        break;

        //Games
        case 'spanG1':
          spanText = "Stick vs Zombie - HTML5(mobile) Game"
        break;
        case 'spanG2':
          spanText = "Turkey Bay - Phaser Game"
          break;
        case 'spanG3':
          spanText = "Dungeon Kids"
        break;
        case 'spanG4':
          spanText = "Arcade Island"
        break;

        //Freelance
        case 'spanF1':
          spanText = "Dawg Tutors"
          break;
        case 'spanF2':
          spanText = "Meza Mechanical"
          break;
        case 'spanF3':
          spanText = "Lydia Harris"
        break;
        case 'spanF4':
          spanText = "SEW Inc"
        break;
        case 'spanF5':
          spanText = "LEG Consulting"
        break;

        //Corporate Starts here
        case 'spanC1':
          spanText = "Accenture\nSystem Developer Senior Analyst\nCost Model Tool"
        break;
        case 'spanC2':
          spanText = "MicroTrain Technologies\nWeb Dev\nCoding Bootcamp"
        break;
        case 'spanC3':
          spanText = "Wyzant\nIT Tutor\n Core Java, Web Development"
        break;
        case 'spanC4':
          spanText = "American Robotics Academy"
        break;
        case 'spanC5':
          spanText = "TX Computers"
        break;
        }
        document.getElementById('noActionZoneText').innerText = spanText; 

    }
    else if(this.focusEle == id){
      this.focusEle = null;
      var eleupdate = document.getElementById('noActionZoneImage')
      eleupdate.className = "noActionZoneBackgroundImage";

      var ele = document.getElementById(id).className = "positionOrgin";
      document.getElementById('noActionZoneText').innerText = ""; 

      document.getElementById('pop1').style.display = "none";
      document.getElementById('pop2').style.display = "none";
      document.getElementById('pop3').style.display = "none";
    }
    // document.body.scrollIntoView({behavior: "auto"});

  }



}
