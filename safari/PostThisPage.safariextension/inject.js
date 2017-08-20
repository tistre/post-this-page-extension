function messageHandler(e)
{
    if (e.name !== 'get_page_data')
    {
        return;
    }
    
    e.message.formData.html = document.documentElement.outerHTML;
    
    safari.self.tab.dispatchMessage('get_page_data_result', e.message);
}


if (window.top === window) // Ignore iFrames
{
    safari.self.addEventListener('message', messageHandler, false);
}
