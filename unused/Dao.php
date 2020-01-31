
<?php
#need database table "user" with elements user_id (as primary key), username, email, password
class Dao {

#todo: fill in values
  private $host = '';
  private $db = '';
  private $user = '';
  private $password = '';

  public function __construct () {

  }

  public function getConnection () {

    return new PDO("mysql:host={$this->host};dbname={$this->db}", $this->user, $this->password);
  }

  public function getComments () {
    $conn = $this->getConnection();
    return $conn->query("select comment, date_created from comment order by date_created desc", PDO::FETCH_ASSOC);
  }

  public function getUser ($userName) {
    $conn = $this->getConnection();
    return $conn->query("select *  from user where username = {$userName}", PDO::FETCH_ASSOC);
  }

  public function getPassword ($userName) {
    echo ("trying to get a connection at getPassword()");
    $conn = $this->getConnection();
    echo ("getPassword after conn");
    $result = $conn->query("select *  from user where username like '$userName'");
    foreach ($result as $currentUser) {
      echo ($currentUser ['password']);
      return $currentUser['password'];
    }
  }

  public function validateUser ($userName) {
    echo ("trying to get a connection at validateUser()");
    $conn = $this->getConnection();
  //  echo ("getPassword after conn");
    $result = $conn->query("select *  from user where username like '$userName'");
    foreach ($result as $currentUser) {
    //  echo ($currentUser ['username']);
    if ($currentUser['username'] )
//return $currentUser['username'];
      return true;
    }
  }

  public function createUser ($userName, $email, $password) {
    $conn = $this->getConnection();
    $saveQuery = "insert into user (username, email, password) values (:name, :email, :password)";
    $q = $conn->prepare($saveQuery);
    $q->bindParam(":name", $userName);
    $q->bindParam(":email", $email);
    $q->bindParam(":password", $password);
    $q->execute();
  }

/* USE THIS IF YOU WANT PROFILE PHOTO WITH USERNAME
  public function createUser ($userName, $password, $imagePath) {
    $conn = $this->getConnection();
    $saveQuery = "insert into user (name, email, password, image_path) values (:name, :email, :password, :image_path)";
    $q = $conn->prepare($saveQuery);
    $q->bindParam(":name", $userName);
    $q->bindParam(":email", $userName);
    $q->bindParam(":password", $password);
    $q->bindParam(":image_path", $imagePath);
    $q->execute();
  }
*/
/* USE THIS IF YOU WANT USER TO BE ABLE TO SUBMIT COMMENTS
  public function saveComment ($comment) {
    $this->logger->LogInfo("Saving a comment [{$comment}]");//modify this
    $conn = $this->getConnection();
    $saveQuery = "insert into comment (comment, user_id) values (:comment, 1)";
    $q = $conn->prepare($saveQuery);
    $q->bindParam(":comment", $comment);
    $q->execute();
  }
  */
}
