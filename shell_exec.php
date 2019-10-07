<?php
    $output = array("");
    function runUnusualScraper(){
        $command = escapeshellcmd('py C:\Users\Shaeo\Documents\Kingswulfe-Website\UnusualWordScraper\scraperMain.py '.$_GET['url'].' C:\Users\Shaeo\Documents\Kingswulfe-Website\UnusualWordScraper\hashtable.txt');
        exec($command, $output, $ret);
        //var_dump($output);
        $unusualString = "";
        foreach($output as $line) {
            if($line != ""){
                $unusualString.="$line, ";
            }
        }
        echo(rtrim($unusualString, ','));
    }
    if(isset($_GET['run'])){
        runUnusualScraper();
    }
?>