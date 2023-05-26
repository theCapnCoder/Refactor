console.log("Hello World");

// Extract Funtion

function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding(invoice);

  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
}


function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding(invoice);
  printDetails(outstanding)

  function printDetails() {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
  }
}