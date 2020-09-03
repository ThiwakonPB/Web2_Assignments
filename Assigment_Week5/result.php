<html>

<head>

</head>

<body>
    <script>
        window.location.reload;
        </script>

    <p id="results"></p>

    <!-- -- // output data of each row
    -- while($row = $result->fetch_assoc()) {
    --   echo "id: " . $row[]. "<br>";
    } -->
    <h1> Tickets reserved:</h1>
    <?php

    $user = 'root';
    $pass = '';
    $db = 'concert';
    $db = new mysqli('localhost', $user, $pass, $db) or die("No connection");

    if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    }

    $sql = "SELECT id,cost FROM `seat2` WHERE ticked = 1";
    $result = $db->query($sql);
    $total = 0;

    if ($result->num_rows > 0) {
        global $total;
        while ($row = mysqli_fetch_assoc($result)) {
            echo $row['id'] . " " . "Price: " . $row['cost'] . "<br>";
            $total += $row['cost'];
        }
        echo "Total: " .$total;
    } else {
        echo "0 results";
    }

    ?>



</body>

</html>