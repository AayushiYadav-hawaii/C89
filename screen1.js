function addUser(){
    if((document.getElementById("player1_name").value=="")&&(document.getElementById("player2_name").value=="")){
        document.getElementById("player1_name").placeholder="ID is required";
        document.getElementById("player2_name").placeholder="ID is required";
    }
    else if(document.getElementById("player1_name").value==""){
        document.getElementById("player1_name").placeholder="ID is required";
    }
    else if(document.getElementById("player2_name").value==""){
        document.getElementById("player2_name").placeholder="ID is required";
    }
    else{
        player1 = document.getElementById("player1_name").value;
        player2 = document.getElementById("player2_name").value;
        localStorage.setItem("player1name", player1);
        localStorage.setItem("player2name", player2);
        window.location="game_page.html";
    }
}
