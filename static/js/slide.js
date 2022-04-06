class slide{
    constructor(){
        this.left_btn = document.querySelector(".left");
        this.rigth_btn = document.querySelector(".right");
        this.init();
    }

    init(){
        this.left_btn.onclick = this.left;
        // this.rigth_btn.onclick = this.right;
    }

    left(){
        console.log("left");

    }

    right(){
        console.log("right");
    }

}

new slide();