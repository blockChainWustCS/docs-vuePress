<template><div><h1 id="solidity学习笔记" tabindex="-1"><a class="header-anchor" href="#solidity学习笔记" aria-hidden="true">#</a> Solidity学习笔记</h1>
<h3 id="函数四种访问权限" tabindex="-1"><a class="header-anchor" href="#函数四种访问权限" aria-hidden="true">#</a> 函数四种访问权限</h3>
<table>
<thead>
<tr>
<th style="text-align:center">修饰词</th>
<th style="text-align:center">含义</th>
<th style="text-align:center">内部是否可访问</th>
<th style="text-align:center">外部是否可访问</th>
<th style="text-align:center">子类能否继承</th>
<th style="text-align:left">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">private</td>
<td style="text-align:center">私有函数</td>
<td style="text-align:center">✔</td>
<td style="text-align:center">✖</td>
<td style="text-align:center">✖</td>
<td style="text-align:left">只有自己能用</td>
</tr>
<tr>
<td style="text-align:center">internal</td>
<td style="text-align:center">内部函数</td>
<td style="text-align:center">✔</td>
<td style="text-align:center">✖</td>
<td style="text-align:center">✔</td>
<td style="text-align:left">只有自己和子合约可用</td>
</tr>
<tr>
<td style="text-align:center">external</td>
<td style="text-align:center">外部函数</td>
<td style="text-align:center">✖</td>
<td style="text-align:center">✔</td>
<td style="text-align:center">✔</td>
<td style="text-align:left">只有外部和子合约可调用</td>
</tr>
<tr>
<td style="text-align:center">public</td>
<td style="text-align:center">公共函数</td>
<td style="text-align:center">✔</td>
<td style="text-align:center">✔</td>
<td style="text-align:center">✔</td>
<td style="text-align:left">所有都能用</td>
</tr>
</tbody>
</table>
<h4 id="payable修饰符" tabindex="-1"><a class="header-anchor" href="#payable修饰符" aria-hidden="true">#</a> payable修饰符</h4>
<p><code v-pre>payable</code> 方法是让 Solidity 和以太坊变得如此酷的一部分 —— 它们是一种可以接收以太(eth)的特殊函数。</p>
<p>先放一下。当你在调用一个普通网站服务器上的API函数的时候，你无法用你的函数传送美元——你也不能传送比特币。</p>
<p>但是在以太坊中， 因为钱 (<em>以太</em>), 数据 (<em>事务负载</em>)， 以及合约代码本身都存在于以太坊。你可以在同时调用函数 <strong>并</strong>付钱给另外一个合约。</p>
<p>这就允许出现很多有趣的逻辑， 比如向一个合约要求支付一定的钱来运行一个函数。</p>
<h4 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h4>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code><span class="token keyword">contract</span> <span class="token class-name">OnlineStore</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">buySomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
    <span class="token comment">// 检查以确定0.001以太发送出去来运行函数:</span>
    <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token number">0.001</span> ether<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 如果为真，一些用来向函数调用者发送数字内容的逻辑</span>
    <span class="token function">transferThing</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里，<code v-pre>msg.value</code> 是一种可以查看向合约发送了多少以太的方法，另外 <code v-pre>ether</code> 是一个內建单元。</p>
<h3 id="函数两种状态" tabindex="-1"><a class="header-anchor" href="#函数两种状态" aria-hidden="true">#</a> 函数两种状态</h3>
<table>
<thead>
<tr>
<th>状态</th>
<th>作用</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>(default)</td>
<td>默认不用显式写出，正常函数</td>
<td></td>
</tr>
<tr>
<td>view</td>
<td>标记该函数只读不可写，不会消耗gas</td>
<td>理解为只能读取链上的数据</td>
</tr>
<tr>
<td>pure</td>
<td>标记该函数不可读不可写，不会消耗gas</td>
<td>理解为不与链上的数据交互，可与参数交互</td>
</tr>
</tbody>
</table>
<h2 id="命名规范" tabindex="-1"><a class="header-anchor" href="#命名规范" aria-hidden="true">#</a> 命名规范</h2>
<ol>
<li>
<p>变量名称使用<strong>驼峰命名法</strong>，例如 newData</p>
</li>
<li>
<p>内部函数和私有函数名称用下划线开头</p>
</li>
<li>
<p>函数参数名称用下划线开头</p>
<p>示例：</p>
<div class="language-Solidity ext-Solidity line-numbers-mode"><pre v-pre class="language-Solidity"><code>function _createZombie(string _name, uint _dna) internal {...}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>uint 和uint256是一样的，但是ERC等规范使用uint256，所以统一使用uint256，尽量少用简写uint</p>
</li>
</ol>
<h2 id="storge和memory的区别" tabindex="-1"><a class="header-anchor" href="#storge和memory的区别" aria-hidden="true">#</a> storge和memory的区别</h2>
<table>
<thead>
<tr>
<th>类别</th>
<th>描述</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>storge</td>
<td>永久存储在区块链上，所有的操作都会有记录，消耗资源，即放入所有节点，外部存储</td>
<td>非常昂贵</td>
</tr>
<tr>
<td>memory</td>
<td>只是写入内存，不会同步所有节点，执行完毕后即释放，不消耗链资源</td>
<td>多用于处理循环</td>
</tr>
</tbody>
</table>
<p><strong>默认情况下</strong> （不需要显式声明）</p>
<p>在函数之外的变量会被声明为Storage形式永久存储在区块链上</p>
<p>在函数内部的变量会被声明为Memory形式，函数调用完成后即释放</p>
<p><strong>特殊情况</strong>（需要显式声明）</p>
<p>主要是用于处理函数内的 <strong>结构体</strong> 和 <strong>数组</strong> 时会需要用到显式声明，如果未声明，编译器会给出警告，示例：</p>
<div class="language-Solidity ext-Solidity line-numbers-mode"><pre v-pre class="language-Solidity"><code>contract SandwichFactory {
  struct Sandwich {
    string name;
    string status;
  }

  Sandwich[] sandwiches;

  function eatSandwich(uint _index) public {
    // Sandwich mySandwich = sandwiches[_index];

    // ^ 看上去很直接，不过 Solidity 将会给出警告
    // 告诉你应该明确在这里定义 `storage` 或者 `memory`。

    // 所以你应该明确定义 `storage`:
    Sandwich storage mySandwich = sandwiches[_index];
    // ...这样 `mySandwich` 是指向 `sandwiches[_index]`的指针
    // 在存储里，另外...
    mySandwich.status = &quot;Eaten!&quot;;
    // ...这将永久把 `sandwiches[_index]` 变为区块链上的存储

    // 如果你只想要一个副本，可以使用`memory`:
    Sandwich memory anotherSandwich = sandwiches[_index + 1];
    // ...这样 `anotherSandwich` 就仅仅是一个内存里的副本了
    // 另外
    anotherSandwich.status = &quot;Eaten!&quot;;
    // ...将仅仅修改临时变量，对 `sandwiches[_index + 1]` 没有任何影响
    // 不过你可以这样做:
    sandwiches[_index + 1] = anotherSandwich;
    // ...如果你想把副本的改动保存回区块链存储
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="keccak256" tabindex="-1"><a class="header-anchor" href="#keccak256" aria-hidden="true">#</a> keccak256</h2>
<p>keccak256是solidity内置函数，返回一个256位二进制字符串，只要参数一致，即可返回相同结果，无法逆向，主要用于</p>
<ol>
<li>
<p>判断字符串是否相等（唯一办法）</p>
</li>
<li>
<p>生成随机数（不是100%安全）</p>
<h3 id="用-keccak256-来制造随机数。" tabindex="-1"><a class="header-anchor" href="#用-keccak256-来制造随机数。" aria-hidden="true">#</a> 用 keccak256 来制造随机数。</h3>
<p>Solidity 中最好的随机数生成器是 <code v-pre>keccak256</code> 哈希函数.</p>
<p>我们可以这样来生成一些随机数</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code><span class="token comment">// 生成一个0到100的随机数:</span>
<span class="token builtin">uint</span> randNonce <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token builtin">uint</span> random <span class="token operator">=</span> <span class="token builtin">uint</span><span class="token punctuation">(</span><span class="token function">keccak256</span><span class="token punctuation">(</span>now<span class="token punctuation">,</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> randNonce<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">100</span><span class="token punctuation">;</span>
randNonce<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token builtin">uint</span> random2 <span class="token operator">=</span> <span class="token builtin">uint</span><span class="token punctuation">(</span><span class="token function">keccak256</span><span class="token punctuation">(</span>now<span class="token punctuation">,</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> randNonce<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">100</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个方法首先拿到 <code v-pre>now</code> 的时间戳、 <code v-pre>msg.sender</code>、 以及一个自增数 <code v-pre>nonce</code> （一个仅会被使用一次的数，这样我们就不会对相同的输入值调用一次以上哈希函数了）。</p>
<p>然后利用 <code v-pre>keccak</code> 把输入的值转变为一个哈希值, 再将哈希值转换为 <code v-pre>uint</code>, 然后利用 <code v-pre>% 100</code> 来取最后两位, 就生成了一个0到100之间随机数了。</p>
<h3 id="这个方法很容易被不诚实的节点攻击" tabindex="-1"><a class="header-anchor" href="#这个方法很容易被不诚实的节点攻击" aria-hidden="true">#</a> 这个方法很容易被不诚实的节点攻击</h3>
<p>在以太坊上, 当你在和一个合约上调用函数的时候, 你会把它广播给一个节点或者在网络上的 *<strong>transaction*</strong> 节点们。 网络上的节点将收集很多事务, 试着成为第一个解决计算密集型数学问题的人，作为“工作证明”，然后将“工作证明”(Proof of Work, PoW)和事务一起作为一个 *<strong>block*</strong> 发布在网络上。</p>
<p>一旦一个节点解决了一个PoW, 其他节点就会停止尝试解决这个 PoW, 并验证其他节点的事务列表是有效的，然后接受这个节点转而尝试解决下一个节点。</p>
<p><strong>这就让我们的随机数函数变得可利用了</strong></p>
<p>我们假设我们有一个硬币翻转合约——正面你赢双倍钱，反面你输掉所有的钱。假如它使用上面的方法来决定是正面还是反面 (<code v-pre>random &gt;= 50</code> 算正面, <code v-pre>random &lt; 50</code> 算反面)。</p>
<p>如果我正运行一个节点，我可以 <strong>只对我自己的节点</strong> 发布一个事务，且不分享它。 我可以运行硬币翻转方法来偷窥我的输赢 — 如果我输了，我就不把这个事务包含进我要解决的下一个区块中去。我可以一直运行这个方法，直到我赢得了硬币翻转并解决了下一个区块，然后获利。</p>
<h2 id="所以我们该如何在以太坊上安全地生成随机数呢" tabindex="-1"><a class="header-anchor" href="#所以我们该如何在以太坊上安全地生成随机数呢" aria-hidden="true">#</a> 所以我们该如何在以太坊上安全地生成随机数呢</h2>
<p>因为区块链的全部内容对所有参与者来说是透明的， 这就让这个问题变得很难，它的解决方法不在本课程讨论范围，你可以阅读 <a href="https://ethereum.stackexchange.com/questions/191/how-can-i-securely-generate-a-random-number-in-my-smart-contract" target="_blank" rel="noopener noreferrer">这个 StackOverflow 上的讨论<ExternalLinkIcon/></a> 来获得一些主意。 一个方法是利用 *<strong>oracle*</strong> 来访问以太坊区块链之外的随机数函数。</p>
<p>当然， 因为网络上成千上万的以太坊节点都在竞争解决下一个区块，我能成功解决下一个区块的几率非常之低。 这将花费我们巨大的计算资源来开发这个获利方法 — 但是如果奖励异常地高(比如我可以在硬币翻转函数中赢得 1个亿)， 那就很值得去攻击了。</p>
<p>所以尽管这个方法在以太坊上不安全，在实际中，除非我们的随机函数有一大笔钱在上面，你游戏的用户一般是没有足够的资源去攻击的。</p>
<p>因为在这个教程中，我们只是在编写一个简单的游戏来做演示，也没有真正的钱在里面，所以我们决定接受这个不足之处，使用这个简单的随机数生成函数。但是要谨记它是不安全的。</p>
<h3 id="区块链结构图" tabindex="-1"><a class="header-anchor" href="#区块链结构图" aria-hidden="true">#</a> 区块链结构图</h3>
<p><img src="https://s1.328888.xyz/2022/07/19/lo7Wh.png" alt="lo7Wh.png"></p>
</li>
</ol>
<h2 id="代币" tabindex="-1"><a class="header-anchor" href="#代币" aria-hidden="true">#</a> 代币</h2>
<p>一个 <strong><em>代币</em></strong> 在以太坊基本上就是一个遵循一些共同规则的智能合约——即它实现了所有其他代币合约共享的一组标准函数，例如 <code v-pre>transfer(address _to, uint256 _value)</code> 和 <code v-pre>balanceOf(address _owner)</code>.</p>
<p>在智能合约内部，通常有一个映射， <code v-pre>mapping(address =&gt; uint256) balances</code>，用于追踪每个地址还有多少余额。</p>
<p>（-----------------------划重点---------------------------）</p>
<p><em>所以基本上<strong>一个代币只是一个</strong>追踪谁拥有多少该代币的<strong>合约</strong>，<strong>和一些</strong>可以让那些用户将他们的代币转移到其他地址的<strong>函数</strong>。</em></p>
<h3 id="erc20" tabindex="-1"><a class="header-anchor" href="#erc20" aria-hidden="true">#</a> ERC20</h3>
<p>为什么重要？</p>
<p>由于所有 ERC20 代币共享具有相同名称的同一组函数，它们都可以以相同的方式进行交互。</p>
<p>这意味着如果你构建的应用程序能够与一个 ERC20 代币进行交互，那么它就也能够与任何 ERC20 代币进行交互。 这样一来，将来你就可以轻松地将更多的代币添加到你的应用中，而无需进行自定义编码。 你可以简单地插入新的代币合约地址，然后哗啦，你的应用程序有另一个它可以使用的代币了。</p>
<p>其中一个例子就是交易所。 当交易所添加一个新的 ERC20 代币时，实际上它只需要添加与之对话的另一个智能合约。 用户可以让那个合约将代币发送到交易所的钱包地址，然后交易所可以让合约在用户要求取款时将代币发送回给他们。</p>
<p>交易所只需要实现这种转移逻辑一次，然后当它想要添加一个新的 ERC20 代币时，只需将新的合约地址添加到它的数据库即可。</p>
<h3 id="其他代币标准-erc721" tabindex="-1"><a class="header-anchor" href="#其他代币标准-erc721" aria-hidden="true">#</a> 其他代币标准（ERC721）</h3>
<p>摘自僵尸游戏的例子：</p>
<p>对于像货币一样的代币来说，ERC20 代币非常酷。 但是要在我们僵尸游戏中代表僵尸就并不是特别有用。</p>
<p>首先，僵尸不像货币可以分割 —— 我可以发给你 0.237 以太，但是转移给你 0.237 的僵尸听起来就有些搞笑。</p>
<p>其次，并不是所有僵尸都是平等的。 你的2级僵尸&quot;<strong>Steve</strong>&quot;完全不能等同于我732级的僵尸&quot;<strong>H4XF13LD MORRIS 💯💯😎💯💯</strong>&quot;。（你差得远呢，<em>Steve</em>）。</p>
<p>有另一个代币标准更适合如 CryptoZombies 这样的加密收藏品——它们被称为*<strong>ERC721 代币.*</strong></p>
<p><u><em><strong>ERC721 代币</strong></em>是<strong>不</strong>能互换的，因为每个代币都被认为是唯一且不可分割的。 你只能以整个单位交易它们，并且每个单位都有唯一的 ID。</u> 这些特性正好让我们的僵尸可以用来交易。</p>
<blockquote>
<p>请注意，使用像 ERC721 这样的标准的优势就是，我们不必在我们的合约中实现拍卖或托管逻辑，这决定了玩家能够如何交易／出售我们的僵尸。 如果我们符合规范，其他人可以为加密可交易的 ERC721 资产搭建一个交易所平台，我们的 ERC721 僵尸将可以在该平台上使用。 所以使用代币标准相较于使用你自己的交易逻辑有明显的好处。</p>
</blockquote>
</div></template>


