<script lang="ts">
	import logo from '$lib/assets/logo.png';
</script>

<header>
	<div class="container">
		<a href="/" class="logo-link">
			<img src={logo} alt="Logo" class="logo" />
		</a>
	</div>
</header>

<style>
	header {
		background-color: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);

		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.logo-link {
		display: inline-block;
		text-decoration: none;
	}

	.logo {
		height: 70px;
		width: auto;
	}
</style>
