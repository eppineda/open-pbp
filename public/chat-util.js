function clear() { document.getElementById('sayBox').value = ''; this.what = '' }
function scrollDown() {
	var content = document.getElementById('textarea');
	content.scrollTop = content.scrollHeight;
}
function updateConversation() { this.conversation += `${ this.who }> ${ this.what }\n` }

export default { clear, scrollDown, updateConversation }
