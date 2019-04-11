
			<?php
			session_start();
			?>

			<html>
				<head>
					<link rel="stylesheet" href="login.css">
				</head>
				<body>
					<h1>Login Page</h1>

					<form method="post" action="user_handler.php">
						<div><label for="password">Username:</label> <input type="text" id="username" name="username"></div>
						<div><label for="username">Password:</label> <input type="password" id="password" name="password"></div>
						<?php
						if (isset($_SESSION['messages'])) {
							foreach ($_SESSION['messages'] as $message) {
								echo "<div id='message'>" . $message . "</div>";
							}
						}
						unset($_SESSION['messages']);
						?>
						<div><input type="submit" value="Login"></div>
					</form>
				</body>
			</html>
