import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    
  ]
})
export class AppComponent {

  pageFocus

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.closeMenu();
  }

  goStory(){

    if(this.pageFocus != "Story"){
      this.pageFocus = "Story"
      document.getElementById("heading").className = "heading";
      document.getElementById("menubar").style.display = "none";
      document.getElementById("story").className = "defaultPFocus";
      document.getElementById("projects").className = "defaultP";
      document.getElementById("menuTransition").style.display = "block";
      window.setTimeout(goNow, 700)
      this.router.navigate(['/story']);
    }else{
      this.closeMenu();
    }


    function goNow(){
      document.getElementById("menuTransition").style.display = "none";
    }
  }

  goProjects(){
    if(this.pageFocus != "Projects"){
      this.pageFocus = "Projects"
      document.getElementById("heading").className = "heading";
      document.getElementById("menubar").style.display = "none";
      document.getElementById("story").className = "defaultP";
      document.getElementById("projects").className = "defaultPFocus";
      document.getElementById("menuTransition").style.display = "block";
      window.setTimeout(goNow, 700)
      this.router.navigate(['/projects']);
    }
    else{
      this.closeMenu();
    }


    function goNow(){
      document.getElementById("menuTransition").style.display = "none";
    }
  }
  
  goZyris(){
    if(this.pageFocus != "Zyris"){
      this.pageFocus = "Zyris";
      document.getElementById("heading").className = "headingF";
      document.getElementById("menubar").style.display = "none";
      document.getElementById("story").className = "defaultP";
      document.getElementById("projects").className = "defaultP";
      document.getElementById("menuTransition").style.display = "block";
      window.setTimeout(goNow, 700)
      this.router.navigate(['/']);      
    }
    else{
      this.closeMenu()
    }


    function goNow(){
      document.getElementById("menuTransition").style.display = "none";
    }
  }

  goIcon(icon_number){
    document.getElementById("menubar").style.display = "none";

    switch(icon_number) {
      case 0:
        window.location.href = 'https://github.com/zeyeland';
        break;
      case 1:
        window.location.href = 'https://www.linkedin.com/in/shakirze/';
        break;
      case 2:
        window.location.href = 'https://www.youtube.com/watch?v=CJZpEIenlQg&t=1s';
        break;
      case 3:
        window.location.href = 'https://stackoverflow.com/users/9636850/z-eyeland';
        break;
      case 4:
        // alert("This will link to resume...coming soon")
        window.location.href = 'https://getsome.tech/resume';
        break;
      case 5:
          window.location.href = 'https://www.wyzant.com/match/tutor/88523989';
        break;
    }
  }
  
  // goContact(){
    
  // }


  expandMenu(){
    document.getElementById("menubar").style.display = "block";
    document.body.scrollIntoView({behavior: "smooth"});



  }

  closeMenu(){
    document.getElementById("menubar").style.display = "none";
  }
}
