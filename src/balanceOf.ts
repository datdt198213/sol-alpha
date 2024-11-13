import { ethers } from "ethers";

// Your BSC node provider URL (replace with your actual provider)
const BSC_PROVIDER_URL = "https://bsc-dataseed1.binance.org/"; // Public BSC endpoint or your provider's URL

// Contract address and ABI
const contractAddress = "0xb2ea51BAa12C461327d12A2069d47b30e680b69D";
const contractABI: string[] = [
  // ABI for balanceOf function
  "function balanceOf(address account) view returns (uint256)"
];

// Wallet address to query
const walletAddress = "0x248Dd3836E2A8B56279C04addC2D11F3c2497836";

async function getBalance(): Promise<string | undefined> {
  // Connect to BSC provider
  const provider = new ethers.JsonRpcProvider(BSC_PROVIDER_URL);

  // Connect to the contract
  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  try {
    // Call the balanceOf function
    const balance = await contract.balanceOf(walletAddress);
    return ethers.formatUnits(balance, 18); // Format balance in readable format if 18 decimals
  } catch (error) {
    console.error("Error fetching balance:", error);
    return undefined;
  }
}

export default getBalance;