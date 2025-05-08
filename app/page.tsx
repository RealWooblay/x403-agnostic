import Link from "next/link"
import { ArrowRight, Github, Terminal, Twitter, MessageCircle, Code, Layers, Zap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Header */}
      <header className="border-b border-gray-800 px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            <span className="text-xl font-bold tracking-tight">x402</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#how-it-works" className="text-sm hover:text-gray-400 transition-colors">
              How It Works
            </Link>
            <Link href="#why-402" className="text-sm hover:text-gray-400 transition-colors">
              Why 402?
            </Link>
            <Link href="#developers" className="text-sm hover:text-gray-400 transition-colors">
              Developers
            </Link>
            <Link href="#token" className="text-sm hover:text-gray-400 transition-colors">
              Token
            </Link>
            <Link href="#ecosystem" className="text-sm hover:text-gray-400 transition-colors">
              Ecosystem
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="#waitlist"
              className="bg-white text-black px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 border-b border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="glitch-grid"></div>
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col items-start gap-6">
            <div className="inline-block px-3 py-1 border border-gray-700 text-gray-400 text-xs">PROTOCOL STANDARD</div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-green-500">HTTP 402:</span> Payment Required
            </h1>
            <p className="text-2xl md:text-3xl font-medium mt-2 max-w-3xl">Money has been added to the internet.</p>
            <p className="text-gray-400 max-w-2xl mt-4">
              x402 is the open protocol for streaming micro-payments over stablecoins. Chain-agnostic. Internet-native.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link
                href="#waitlist"
                className="bg-white text-black px-6 py-3 font-medium flex items-center gap-2 hover:bg-gray-200 transition-colors"
              >
                Join the Waitlist <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="flex gap-3">
                <Link
                  href="https://twitter.com"
                  className="border border-gray-700 p-3 hover:bg-gray-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="https://discord.com"
                  className="border border-gray-700 p-3 hover:bg-gray-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 border-b border-gray-800">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <div className="inline-block px-3 py-1 border border-gray-700 text-gray-400 text-xs w-fit">
                HOW IT WORKS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Streaming micro-payments protocol</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
              <div className="border border-gray-800 p-6 flex flex-col items-center gap-4 bg-gray-900">
                <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center">
                  <Code className="h-6 w-6 text-green-500" />
                </div>
                <p className="text-sm">SDK Integration</p>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-gray-600" />
              </div>
              <div className="border border-gray-800 p-6 flex flex-col items-center gap-4 bg-gray-900">
                <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center">
                  <Terminal className="h-6 w-6 text-green-500" />
                </div>
                <p className="text-sm">402 Micro-payment</p>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-gray-600" />
              </div>
              <div className="border border-gray-800 p-6 flex flex-col items-center gap-4 bg-gray-900">
                <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-green-500" />
                </div>
                <p className="text-sm">Access Granted</p>
              </div>
            </div>

            <div className="border border-gray-800 p-6 bg-black">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-gray-500 text-sm ml-2">Terminal</span>
              </div>
              <div className="font-mono text-sm">
                <p className="text-gray-400">
                  <span className="text-green-500">$</span> Request resource with x402 header
                </p>
                <p className="text-gray-400 mt-2">
                  <span className="text-green-500">$</span> Stablecoin micro-payment processed (USDC/DAI)
                </p>
                <p className="text-gray-400 mt-2">
                  <span className="text-green-500">$</span> Protocol fee paid in $X402 token
                </p>
                <p className="text-white mt-2">
                  <span className="text-green-500">$</span>{" "}
                  <span className="text-green-500">Access granted to resource</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why 402 */}
      <section id="why-402" className="py-20 px-4 border-b border-gray-800">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <div className="inline-block px-3 py-1 border border-gray-700 text-gray-400 text-xs w-fit">WHY 402?</div>
              <h2 className="text-3xl md:text-4xl font-bold">Reviving a forgotten standard</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-800 p-8 bg-gray-900">
                <h3 className="text-xl font-bold mb-4">HTTP 402: Payment Required</h3>
                <p className="text-gray-400 mb-6">
                  The HTTP 402 Payment Required status code was reserved for future use in the original HTTP
                  specification. It was intended to be used when a request required payment to access a resource.
                </p>
                <div className="border border-gray-800 p-4 bg-black font-mono text-sm">
                  <p className="text-gray-400">
                    <span className="text-green-500">HTTP/1.1 402</span> Payment Required
                  </p>
                </div>
              </div>
              <div className="border border-gray-800 p-8 bg-gray-900">
                <h3 className="text-xl font-bold mb-4">The Missing Protocol</h3>
                <p className="text-gray-400 mb-6">
                  Despite being in the HTTP specification for decades, no standardized implementation has emerged. x402
                  fills this gap by providing a chain-agnostic protocol for micro-payments across the internet.
                </p>
                <blockquote className="border-l-2 border-green-500 pl-4 text-gray-400 italic">
                  "x402 is not just another payment solution; it's the implementation of a long-dormant internet
                  standard."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Developers */}
      <section id="developers" className="py-20 px-4 border-b border-gray-800">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <div className="inline-block px-3 py-1 border border-gray-700 text-gray-400 text-xs w-fit">
                FOR DEVELOPERS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Simple integration, powerful capabilities</h2>
            </div>

            <div className="border border-gray-800 p-6 bg-black">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-gray-500 text-sm ml-2">Installation</span>
              </div>
              <div className="font-mono text-sm">
                <p className="text-gray-400">
                  <span className="text-green-500">$</span> npm install x402-sdk
                </p>
              </div>
            </div>

            <div className="border border-gray-800 p-6 bg-black">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-gray-500 text-sm ml-2">Example.js</span>
              </div>
              <div className="font-mono text-sm">
                <p className="text-gray-400">
                  <span className="text-purple-500">import</span> {"{ x402 }"}{" "}
                  <span className="text-purple-500">from</span> <span className="text-green-500">'x402-sdk'</span>;
                </p>
                <p className="text-gray-400 mt-2">
                  <span className="text-purple-500">const</span> response ={" "}
                  <span className="text-purple-500">await</span> fetch(
                  <span className="text-green-500">"/premium-content"</span>, {"{"}
                </p>
                <p className="text-gray-400 ml-4">headers: {"{"}</p>
                <p className="text-gray-400 ml-8">
                  <span className="text-green-500">"x402-payment"</span>: x402.generatePaymentHeader({"{"}
                </p>
                <p className="text-gray-400 ml-12">
                  amount: <span className="text-yellow-500">0.01</span>,{" "}
                  <span className="text-gray-600">// in USD</span>
                </p>
                <p className="text-gray-400 ml-12">
                  token: <span className="text-green-500">"USDC"</span>,
                </p>
                <p className="text-gray-400 ml-12">
                  recipient: <span className="text-green-500">"0x..."</span>
                </p>
                <p className="text-gray-400 ml-8">{"})"}</p>
                <p className="text-gray-400 ml-4">{"}"}</p>
                <p className="text-gray-400">{"}"});</p>
              </div>
            </div>

            <div className="flex justify-center">
              <Link
                href="#"
                className="border border-gray-700 px-6 py-3 font-medium flex items-center gap-2 hover:bg-gray-900 transition-colors"
              >
                View Documentation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Token Utility */}
      <section id="token" className="py-20 px-4 border-b border-gray-800">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <div className="inline-block px-3 py-1 border border-gray-700 text-gray-400 text-xs w-fit">
                TOKEN UTILITY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">$X402 Token</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-800 p-6 bg-gray-900">
                <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Protocol Fees</h3>
                <p className="text-gray-400">
                  Protocol fees are paid in $X402 tokens, creating sustainable demand for the token as the network
                  grows.
                </p>
              </div>
              <div className="border border-gray-800 p-6 bg-gray-900">
                <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Staking</h3>
                <p className="text-gray-400">
                  Stake $X402 to earn a portion of protocol fees and secure the network against malicious actors.
                </p>
              </div>
              <div className="border border-gray-800 p-6 bg-gray-900">
                <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Governance</h3>
                <p className="text-gray-400">
                  $X402 holders can vote on protocol upgrades, fee structures, and treasury allocations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section id="ecosystem" className="py-20 px-4 border-b border-gray-800">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <div className="inline-block px-3 py-1 border border-gray-700 text-gray-400 text-xs w-fit">ECOSYSTEM</div>
              <h2 className="text-3xl md:text-4xl font-bold">Powered by x402</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="border border-gray-800 p-6 bg-gray-900 flex items-center justify-center h-24">
                  <div className="text-gray-600 font-medium">Partner {i + 1}</div>
                </div>
              ))}
            </div>

            <div className="border border-gray-800 p-8 bg-gray-900">
              <h3 className="text-xl font-bold mb-6">Roadmap</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-6 w-6 rounded-full bg-green-500"></div>
                    <div className="h-full w-0.5 bg-gray-800"></div>
                  </div>
                  <div>
                    <h4 className="font-bold">Q2 2023: Protocol Specification</h4>
                    <p className="text-gray-400 mt-1">Initial protocol specification and whitepaper release</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-6 w-6 rounded-full bg-green-500"></div>
                    <div className="h-full w-0.5 bg-gray-800"></div>
                  </div>
                  <div>
                    <h4 className="font-bold">Q3 2023: Developer SDK</h4>
                    <p className="text-gray-400 mt-1">Release of JavaScript SDK and developer documentation</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-6 w-6 rounded-full bg-gray-700"></div>
                    <div className="h-full w-0.5 bg-gray-800"></div>
                  </div>
                  <div>
                    <h4 className="font-bold">Q4 2023: Mainnet Launch</h4>
                    <p className="text-gray-400 mt-1">Protocol mainnet launch with initial partner integrations</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-6 w-6 rounded-full bg-gray-700"></div>
                  </div>
                  <div>
                    <h4 className="font-bold">Q1 2024: Token Launch</h4>
                    <p className="text-gray-400 mt-1">$X402 token launch and ecosystem expansion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-20 px-4 border-b border-gray-800">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4 text-center">
              <div className="inline-block px-3 py-1 border border-gray-700 text-gray-400 text-xs mx-auto">
                JOIN THE WAITLIST
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Be the first to implement x402</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Join the waitlist to get early access to the x402 protocol and SDK.
              </p>
            </div>

            <div className="max-w-md mx-auto w-full">
              <form className="flex flex-col gap-4">
                <Input type="email" placeholder="Enter your email" className="bg-gray-900 border-gray-800 h-12" />
                <Button type="submit" className="bg-white text-black hover:bg-gray-200 h-12">
                  Join Waitlist
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Terminal className="h-5 w-5" />
                <span className="text-xl font-bold tracking-tight">x402</span>
              </div>
              <p className="text-gray-400 text-sm">Money has been added to the internet.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Protocol</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#how-it-works" className="text-gray-400 hover:text-white text-sm">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#why-402" className="text-gray-400 hover:text-white text-sm">
                    Why 402?
                  </Link>
                </li>
                <li>
                  <Link href="#token" className="text-gray-400 hover:text-white text-sm">
                    Token
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Developers</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    SDK
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm flex items-center gap-2">
                    <Twitter className="h-4 w-4" /> Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" /> Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm flex items-center gap-2">
                    <Github className="h-4 w-4" /> GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-500">
            <p>x402 is not a product of Base. It is a public protocol standard.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
