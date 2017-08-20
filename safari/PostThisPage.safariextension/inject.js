function messageHandler(e)
{
    if (e.name !== 'get_page_data') {
        return;
    }
    
    e.message.formData.html = document.documentElement.outerHTML;
    
    safari.self.tab.dispatchMessage('get_page_data_result', e.message);
}


// Ignore iFrames
if (window.top === window) {
    safari.self.addEventListener('message', messageHandler, false);
}
