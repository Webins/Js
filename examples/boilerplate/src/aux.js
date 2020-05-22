export const server = {
	url: "www.url.com",
	ip: "192.168.1.1",
	name: "Debian"
}

const showServer = (s) => `name:${s.name},url:${s.url},ip:${s.ip}`

export {showServer as default}