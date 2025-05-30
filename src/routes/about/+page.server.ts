/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const profileImageSrc = Math.random() < 0.5 ? "/images/Athens.jpg" : "/images/Parthenon.jpg"

	return { profileImageSrc };
}
