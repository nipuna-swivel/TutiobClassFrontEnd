import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { login } from "@/features/auth/authSlice";
import { useState } from "react";
import Link from "next/link";

function Copyright(props: any) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}>
			{"Copyright © "}
			<Link color="inherit" href="#">
				Perera Coding Acadamy
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function LoginForm() {
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { loading } = useAppSelector((state) => state.auth.loading);

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		console.log("userName:", username, "Password: ", password);

		try {
			const result = await dispatch(
				login({ username: username, password: password })
			);
			if (result?.error) {
				return message.error(result?.payload);
			}
			router.push("/dashboard/Students/list");
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<Box
						component="form"
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="username"
							value={username}
							onInput={(e) => setUserName(e.target.value)}
							label="User-Name"
							name="username"
							autoComplete="userName"
							autoFocus
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							value={password}
							onInput={(e) => setPassword(e.target.value)}
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
							// onClick={() => router.push('/dashboard')}
						>
							Sign In
						</Button>
					</Box>
				</Box>
				<Copyright sx={{ mt: 8, mb: 4 }} />
			</Container>
		</ThemeProvider>
	);
}
