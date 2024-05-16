<?php
    $connection = mysqli_connect("localhost","root","","traveler_db");

    if(isset($_POST['send'])){
        $name = $_POST['name'] ;
        $mail = $_POST['email'];
        $phone = $_POST['phone'];
        $address = $_POST['address'];
        $location = $_POST['location'];
        $many = $_POST['many'];
        $arrivals = $_POST['arrivals'];
        $leaving = $_POST['leaving'];


        $REQUEST = "insert into book_form(name,email,phone,address,location,many,arrivals,leaving) values 
        ('$name','$mail','$phone','$address','$location',' $many','$arrivals','$leaving')";

        mysqli_query($connection,$REQUEST);

        header('location:book.html');
    }else{
        echo'something went wrong try again';
    }
?>