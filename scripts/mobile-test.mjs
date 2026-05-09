import { chromium } from 'playwright';

const devices = [
  { name: 'iPhone-14-Pro', width: 393, height: 852, dpr: 3 },
  { name: 'iPad-Air', width: 820, height: 1180, dpr: 2 },
];

(async () => {
  const browser = await chromium.launch();
  
  for (const device of devices) {
    const context = await browser.newContext({
      viewport: { width: device.width, height: device.height },
      deviceScaleFactor: device.dpr,
      isMobile: true,
      hasTouch: true,
    });
    const page = await context.newPage();
    
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    
    await page.screenshot({ 
      path: `/tmp/mobile-${device.name}-top.png`, 
      fullPage: false 
    });
    
    await page.screenshot({ 
      path: `/tmp/mobile-${device.name}-full.png`, 
      fullPage: true 
    });
    
    console.log(`✅ ${device.name} screenshots saved`);
    await context.close();
  }
  
  await browser.close();
})();
