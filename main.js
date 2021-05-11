const panda = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzggMzgiPjxkZWZzPjxjaXJjbGUgaWQ9ImEiIGN4PSIxOSIgY3k9IjE5IiByPSIxOSIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjx1c2UgZmlsbD0iIzAwMDAwMCIgeGxpbms6aHJlZj0iI2EiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTguNzIgMjYuMjMzYy0uODcyLS42NS0yLjA4Mi0xLjI2Ny0yLjY3MS0yLjAzNy40NzgtLjgzIDEuOTI3LS4wNjQgMi44NjUuMDQ1LjkzLS4xNDMgMi4zNzgtMS4wMzEgMi45MDctLjIxNi0uNTUuODAyLTEuNzI2IDEuNDg1LTIuNTY0IDIuMTgzLS4wODUuMy0uMDE0LjcxLS4wMTQuNzEgMS4yMTguNzI5IDMuODUzLjE2MiA0Ljc3NC0uNzIzLS41OSAxLjU0My0zLjIyIDIuNDczLTQuOTYgMi4zNjYtMS43NDUuMjAyLTQuMzgtLjU5My01LjA1NS0yLjExNy45NjUuODMyIDMuNTkgMS4yOTMgNC43NjkuNDk4IDAgMCAuMDUtLjQxMy0uMDUtLjcwOXpNMzAuODk2IDguNjU4Yy0xLjA2Ny0xLjg3MS0zLjE4OC0yLjkxNC01LjI2My0zLjk5Mi44NTgtMy40NDQgMy44My03Ljk1OSA4LjA4My01LjEwNCAxLjQyMS45NTUgMy40NTkgMy43MDggMi42MzcgNS43OTUtLjY5NiAxLjc2Ny00LjA0NCAyLjA0NC01LjQ1NyAzLjMwMXptLTI0LjQ0LjQxOUM1LjA0MiA3LjgyIDEuNjk0IDcuNTQzLjk5OCA1Ljc3Ni4xNzYgMy42ODggMi4yMTQuOTM2IDMuNjM1LS4wMmM0LjI1Mi0yLjg1NSA3LjIyNSAxLjY2IDguMDgzIDUuMTA0LTIuMDc1IDEuMDc4LTQuMTk2IDIuMTItNS4yNjMgMy45OTJ6bTIyLjI4NyA5Ljk5NWMtLjAyIDIuMTg0LTEuOTc4IDIuNTkyLTIuOTAzIDQuMTA3LS4wODItMi44NTItMi42OTQtNC40NjgtNC4wOC02LjMwMi0uOTI2LTEuMjI2LS4wODYtMy4zNSAxLjQ2OC0zLjE2IDIuMTczLjI2NSA1LjUzNCAzLjEwOCA1LjUxNSA1LjM1NXptLTE3LjMxNyA0LjMyNGMtLjc4NS0xLjYyLTIuNjQ1LTIuMTkxLTIuNTA3LTQuNDI2LjE0Mi0yLjI5OSAzLjU5LTQuOTQ0IDUuNzA3LTUuMDQ2IDEuNTEzLS4wNzIgMi4xNzEgMi4xNjUgMS4xOSAzLjM0Ni0xLjQ3IDEuNzY3LTQuMTA2IDMuMjE3LTQuMzkgNi4xMjZ6IiBtYXNrPSJ1cmwoI2IpIi8+PC9nPjwvc3ZnPg==`;
const fn = () => {
	document.querySelector('.bp-navbar-avatar').setAttribute('src', panda);
	document.querySelector('.bp-navbar-account-overlay-verification-status-image').setAttribute('src', panda);
};
setTimeout(() => {
	if (document.readyState != 'loading') {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}, 2500);
