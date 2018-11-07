<?php 
class RecDB 
{
    
    
    // private $host = ;
    // private $usr = ;
    // private $pass = ;
    // private $dbname = ;
    
    function __construct()
    {
        
        
    }
    
    function connect()
    {
        $this->host = 'localhost';
        $this->user = 'root';
        $this->pass = 'root';
        $this->dbname = 'recepies';
        
        try {
            $dsn = "mysql:host=". $this->host . ";dbname=". $this->dbname;
        
            $pdo = new PDO($dsn, $this->user, $this->pass);
        
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $pdo;    
        } catch (PDOException $e ) {
            echo "Connection failed" .$e->getMessage();
        }
        
        
        
    }
    
    
    function saveRec($name, $category, $ingredients, $directions, $level, $description, $image)
    {
        
    }
    function getRec(){}
    function delRec(){}
    
    
}
    

    

// $res = new RecDB();