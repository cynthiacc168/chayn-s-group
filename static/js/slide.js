class slide{
    constructor(){
        this.left_btn = document.querySelector(".left");
        this.rigth_btn = document.querySelector(".right");
        this.init();
    }

    init(){
        this.left_btn.onclick = this.left;
        this.rigth_btn.onclick = this.right;
    }

    left(){
        var next = document.querySelector(".join");
        next.style.display="none";

        var info = document.querySelector(".info");
        info.style.display="block";

    }

    right(){
        var next = document.querySelector(".join");
        next.style.display="block";

        var info = document.querySelector(".info");
        info.style.display="none";
    }

}

new slide();