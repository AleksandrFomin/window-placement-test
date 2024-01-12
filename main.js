function test(){
	screenDetails = await getScreenDetails().catch(e =>{ console.error(e.name + " " + e.message); return null; });
}
