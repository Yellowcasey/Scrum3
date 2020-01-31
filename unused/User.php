<?php
abstract class User {

    public $username;
    public $password;

    #create username = "marie" and password = "test" in database so we can test
    public function __construct ($username = "marie", $password = "test") {
        $this->username = $username;
        $this->password = $password;
    }
    
    public function isUsernameValid ($username) {
        return $username == $this->username;
    }

    public function isPasswordValid ($password) {
        return $password == $this->password;
    }
}
