<html>

<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>

<body>
  <form>
    <p id="tickbox"></p>
    <input type="button" onclick="validate()" value="Submit" >
  </form>

  <!-- php -->
  <?php
  $user = 'root';
  $pass = '';
  $db = 'concert';
  $db = new mysqli('localhost', $user, $pass, $db) or die("No connection");
  echo "<br>Database Connected";
  // This code checks for post then updates database
  if (isset($_POST['action'])) {
    // switch ($_POST['action']) {
    // case 'setTaken':
    $db->query(sprintf("UPDATE seat2 SET ticked= 1 WHERE id = '%s'", $_POST["id"]));
    
    
    
    // break;
  }

  ?>


  <!-- javascript -->
  <script>
    // Creates tick boxs based on the array "letters"
    var letters = ["A", "B", "C"];
    var text = "";
    for (i = 0; i < letters.length; i++) {
      for (j = 0; j < letters.length; j++) {
        text += letters[j] + (i + 1) + "<input type='checkbox' id='" + (letters[j] + (i + 1)) + "'name='box' value='" + (letters[j] + (i + 1)) + "'>";
        if (j == letters.length - 1) {
          text += "<br>"
        }
      }
    }


    document.getElementById("tickbox").innerHTML = text;

    // Checks for ticks in tickboxes and then post for php code above 

    // jquery
    function validate() {
      var checked = false;
      for (i = 0; i < letters.length; i++) {
        for (j = 0; j < letters.length; j++) {
          var word = letters[j] + (i + 1);
          if (document.getElementById(word).checked) {
            data = {
              'action': 'setTaken',
              'id': word
            };
            $.post("contest.php", data);
            checked = true;
          }

        }
      }
      if (checked == false) {
        alert("You didn't checked anything")
      }
      window.location.href = 'http://localhost/Assigment_Week5/result.php';
    }
  </script>



</body>

</html>