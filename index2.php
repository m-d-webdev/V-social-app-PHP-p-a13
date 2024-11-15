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
    echo '<h1>login not Successful</1>'; 
    echo "</br>";
    echo "<h3>email or password incorrect</h3>";
    $errmsr= true;

}



}

?>


