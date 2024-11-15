
<?php
$connect = mysqli_connect("localhost","root","","mydb") or die ("un problem ");
if($_SERVER["REQUEST_METHOD"]=="POST"){
$email =$_POST["email"];
$psw=$_POST["psw"];


$Query ="SELECT * FROM login8 WHERE email='$email' AND passworpd='$psw'";
$result= mysqli_query($connect,$Query);
$c =mysqli_num_rows($result);
if ($c>0) {
    header("Location: index3.php");
    
}
else{

    
    $errmsr= true;

}
}

?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="contaner">
        <label class="welcoming" for="welcoming">
            <h1>LOGIN</h1>
        </label>

        <form action="" method="post">
            <label for="">
                <input type="email" name="email" id="email" placeholder="">
                <p class="ps">email</p>
            </label>
            <label for="">
                <input type="password" name="psw" id="psw" placeholder="">
                <p class="ps">Password</p>
            </label>
            <button type="submit" class="submit">Submit</button>
        </form>
        <div class="errordiv">
            <div class="contauner1">
                <img src="wrong.png" alt="" class="wrongimg">
                <h3>Error</h3>
                <p>Email or Password is incorrect</p>
                <div class="btns_cnt">
                    <button type="button" class="try_again">Try again</button>
                    <button type="button" class="pass_forg">Password forgeten</button>
                </div>
            </div>
        </div>
    </div>
    <script>
        let pg_arr= document.querySelector(".errordiv");
        let setu = <?= $errmsr ?>;
        if (setu) {
            pg_arr.classList.add("add_disply_flx")
        }
        let btn_tryag= document.querySelector(".try_again");
        btn_tryag.addEventListener("click", ()=>{
            pg_arr.classList.remove("add_disply_flx")

        })
    </script>
</body>

</html>