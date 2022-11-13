function solution(year, month, day) {
    const today = new Date(year, month-1, day);
    const tomorrow = new Date(today.getTime() + 60 * 60 * 24 * 1000);
    
    const yy = tomorrow.getFullYear();
    const mm = tomorrow.getUTCMonth() + 1;
    const dd = tomorrow.getDate();

    console.log(`${yy}-${mm}-${dd}`);
}