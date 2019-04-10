<?php

setcookie("username", "marie", time()+86400*30);

echo  "<pre>" .  print_r($_COOKIE['username'],1) .  "</pre>";

$variable = $_COOKIE[name]; # retrieve value of the cookie

if (isset($_COOKIE ["username"])) {#isset function used to see whether given cookie name exists
    $username = $_COOKIE["username"];
    print("Welcome back, $username.\n");
} else {
    print("Welcome.\n");
}
print("All cookies received:\n");
print_r($_COOKIE);
