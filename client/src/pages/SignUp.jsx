import { Button, Label, TextInput } from "flowbite-react"
import { Link } from "react-router-dom"

export default function SignUp() {
	return (
		<div className="min-h-screen mt-20">
			<div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
				{/* left */}
				<div className="flex-1">
					<Link
						to="/"
						className='font-bold dark:text-white text-4xl'>
						<span className='px-2 py-1 bg-gradient-to-r from-blue-800 via-cyan-600 to-teal-300 rounded-lg text-white'>
							Mabel's
						</span>
						Blog
					</Link>
					<p className="text-sm mt-5">
						Welcome to Mabel's blog. You can sign up with your email and password or with Google.
					</p>
				</div>
				{/* right */}
				<div className="flex-1">
					<form className="flex flex-col gap-4">
						<div>
							<Label value="Username" />
							<TextInput
								type="text"
								placeholder="Username"
								id="username"
							/>
						</div>
						<div>
							<Label value="Email" />
							<TextInput
								type="text"
								placeholder="name@company.com"
								id="email"
							/>
						</div>
						<div>
							<Label value="Password" />
							<TextInput
								type="text"
								placeholder="Password"
								id="password"
							/>
						</div>
						<Button type="submit" gradientMonochrome="info">
							Sign Up
						</Button>
					</form>
					<div className="flex gap-2 text-sm mt-5">
						<span>Have an account?</span>
						<Link to='signin' className="text-blue-500">
							Sign In
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
