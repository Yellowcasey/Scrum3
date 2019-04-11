<?php
  session_start();

  $username = $_POST['username'];
  $password = $_POST['password'];

  $messages = array();
  $valid = true;

  echo("Trying to get Dao");
  require_once 'Dao.php';
  $dao = new Dao();
  echo("Got DAO");
  $correctPassword = $dao->getPassword($username);
  echo ($correctPassword);

  $validUser = $dao->validateUser($username);
  echo ($validUser);

  if (empty($username)) {
    $messages[] = "Please enter a username";
    $valid = false;
  }

  if ($username != $validUser) {
    $messages[] = "Please enter the correct username";
    $valid = false;
  }

  if ($password != $correctPassword) {
    $messages[] = "Incorrect password";
    $valid = false;
  }

  if (empty($password)) {
    $messages[] = "Please enter a password";
    $valid = false;
  }

  if (!$valid) {
    $_SESSION['messages'] = $messages;
    $_SESSION['form_input'] = $_POST;//TODO FORM INPUT
    header("Location: login.php");
    exit();
}

header("Location: _________");//redirect here to name of home page

exit;
?>

<!--
  if(isset($_POST['username'])) {
    $username = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
    echo ($username);
  }

  if(isset($_POST['email'])) {
    $username = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
  }

  if(isset($_POST['password'])) {
    $typedPassword = filter_var($_POST['password'], FILTER_SANITIZE_STRING);
    echo ($typedPassword);
  }

  -->
