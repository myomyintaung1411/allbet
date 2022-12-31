<template>
    <section class="w-full h-auto flex-auto relative mx-[19px] ">
        <div class="bg-[#1f2129] w-full flex h-full overscroll-x-auto">
            <section class="left_section w-[274px] min-w-[274px] h-full relative flex flex-col">
                <div class="pay_mentsection  mx-0  bg-[rgba(40,43,48,.5)] relative h-full flex flex-col">
                    <div class=" pl-3 py-5 border-b border-[#2f343c] title__ text-left text-base ">
                        USDT存款
                    </div>
                    <section @click="usdtMore = !usdtMore" class=" cursor-pointer h-auto border-b border-[#2f343c]">
                        <div class="img_div relative w-[120px] h-7">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAA0CAYAAADL/afBAAAAAXNSR0IArs4c6QAAAyhJREFUeAHt3T9uE0EUx/F5u7ZEk8NQg5xwDm7AKSgRFaKiDDhpSO4QKiJEcEH+GLgBVKloh3mQsSYr787KQ2HP+7rZsWfX8vtofvLLru3I2dOH3nFDAIFeAXFy2fTOMoEAAv8ERE4ICosBgYyAiD8lKBkkpm0LiMjV/nyxJCi21wHV5wS8nOguBCUHxbxpgcZNThWAoJheBhQ/JKBt1+z4043uQ1CGpJizLXDXdikCQbG9FKh+QCC2XboLQRmAYsq0wHVsu1SBoJheCxTfJ9CEi4zpHEFJNRgjcCcgfkpQWA0IZATutV26L+8oGTGm7Ql02y4VICj21gEVZwTatv17kTHdjaCkGozNC4i4m8dvP193IQhKV4T7pgXCd0/erwMgKOtUeMysQPdsV4QgKFGCrXmB8NmuZXqRMQUhKKkGY9MC4Tvxa9suRSEoppcGxacC07a9d5ExnSMoqQZjswLadq072xVBCEqUYGtaYKjtUhiCYnp5UHwUGGq7dB+CEqXYmhUI106+DbVdCkNQzC4PCl8JNL73bFfch6BECbZmBbzrP9sVUSZxwBYBiwLadh3ML65ytfOOkhNivm6BEW2XAhCUupcB1WUExrRd+hS0XhlIpusVGNt2qQDvKPWuAyrLCYjv/chK91CC0hXhvhkBL232tHDEIChRgq0tAZHvT0ac7YooBCVKsDUlIC5/kTEFISipBmMzAjJpRv99oigExczSoNCVQGi79g+/XK7ujxgQlBFI7FKXQJP8Sv3YygjKWCn2q0dg2v+V374iCUqfDI/XKbBB26UQBKXO5UBVPQKbtF36VASlB5SH6xSQdvzV+FSAoKQajKsWCD+X+mP2bvF1kyIJyiZqHLOTAuKb0R9Z6RZIULoi3K9WYNO2S0EISrXLgsJSgZK2S5+HoKSajOsV8M1xSXF8catEj2N3QiC8m9z6yd7rkhdLUEr0OHYnBMS5FweHH25LXiytV4kex269QOOaN7P54mXpCyUopYIcv5UC4Ue3f4d/Wvp8dnTxLIzDTwuX3Wi9yvw4ersEfoa/R5bOu/OpPHj1aP7xlzsKjdd/uP0BJjNzWLqUnPIAAAAASUVORK5CYII="
                                alt="" class="w-full h-full">
                            <div class=" absolute top-0  w-full h-full text-center leading-[28px] text-white  ">
                                USDT存款
                            </div>
                        </div>
                        <div class="py-3 px-3">
                            <div class="flex items-center text-sm w-full justify-between">
                                <p>到交易所用人民币买到钱包</p>
                                <ChevronDownIcon v-if="!usdtMore" class="w-6 h-6 text-white"></ChevronDownIcon>
                                <ChevronUpIcon v-else class="w-6 h-6 text-white"></ChevronUpIcon>
                            </div>

                        </div>
                    </section>
                    <section v-if="usdtMore" class="flex flex-wrap mx-[11px]">
                        <div v-for="n in usdtPic" :key="n.id" class=" ">
                            <div class="relative w-[120px] m-[3px] h-[70px] 
                                    bg-[#d0d0d0] cursor-pointer  flex items-center justify-center 
                                    " style="transition:0.3s;">
                                <div @click="goSite(n.link)" class="w-[110px]">
                                    <img :src="n.pic"
                                        alt="" loading="lazy" class="w-full h-full">
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="">
                        <div class="img_div relative w-[120px] h-7">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAA0CAYAAADL/afBAAAAAXNSR0IArs4c6QAAAxNJREFUeAHt3b9u1EAQx3GP8UkgRE3No4E4TqKjJeISKhAlVV6AhuQheAbyD6goIt2lS0W7eI5MWIztNV6KO883zdq3dnTz0f6UOdtJ5OHhQSj4QgCBbgGRk7J7lhkEEFABKYojgsJaQCAhIGV5TFASSEz7Fqh/mpyu5q8uCIrvdUD1KYGyPNJDCEoKinnfAlV1rAAExfcyoPoeAW271k9enushBKUHiinnAjdtlyoQFOdrgfJ7BG7aLj2CoPQ4MeVXQETOrO1SBYLidy1Qeb/A5mqXHUJQTIIRgVhgNiMosQfbCDQFmm2XzvMTpanEPgL1s11NBILSFGEfAZHNTcYYgqDEGmy7F6hvMp6vny3PmhAEpSnCvm8BkY9tAASlTYXX/Ao0rnYZBEExCUb3AvXVrov4JmMMQlBiDba9C7S2XYpCULwvDer/LSDy12VhmyQoJsHoWmDTdrVc7TIUgmISjN4FOtsuhSEo3pcH9f8S6Gm79ACCwkJxLyBSfGm7yRjDEJRYg22fAqHobbsUhaD4XBpUHQmE6s9H6qOp202CckvBhkcBbbuunu6dpmonKCkh5qctMKDtUgCCMu1lQHUJgSFtl34LgpKAZHq6AkPbLhUgKNNdB1SWFOh+ZKV5KkFpirDvRiDcqZKXhQ2DoJgEoysBKeTrkKtdhkJQTILRl4CkbzLGIAQl1mDbjUBVDP98oigExc3SoFAT0LbrcrE8sf0hI0EZosQxkxIIZej8Ba2uQglKlwyvT1ZgFsrBV7sMgaCYBKMLgTFtl8IQFBfLgyJNYEzbpecSFBNkdCEwk/Qj9W0QBKVNhdcmKVA/2/Xtcr73eUxxBGWMGufspED4x5uMcZEEJdZge9ICY9suRSEok14aFGcCOW2Xfg+CYpKM0xaQ8kNOgQQlR49zd0NAiuu7swfvc94sQcnR49ydEJAgb78/fnGd82YJSo4e5269gJTF4WqxfJf7RglKriDnb6VA/eH9R/2Htw9W8/3n9Rhy3yRByRXk/O0RELmq/wfjp7KQN+He/Ufrxf7r/xESLfAnQDtrjjUHLisAAAAASUVORK5CYII="
                                alt="" class="w-full h-full">
                            <div class=" absolute top-0  w-full h-full text-center leading-[28px] text-white  ">
                                USDT存款
                            </div>
                        </div>
                        <div class="text-sm my-3 px-3 text-[11px]">用USDT钱包存款</div>
                        <div class="py-[20px] px-[13px]">
                            <div @click="clickBank(0)" class="h-[45px] w-full px-3  relative cursor-pointer border border-solid
                 flex items-center  mb-[15px]
                " :class="activeBank == 0 ? ' border-[#eed0a4]' : ' border-[#2f343c] text-white'">
                                <div class="flex items-center">
                                    <img src="@/assets/pc/Home/dcoin.webp"
                                        alt="" class="h-[24px] w-[24px]">
                                    <div class="flex flex-col px-3 text-[13px]">
                                        <span class="p-0 m-0">小金库</span>
                                        <span class="text-[11px] p-0 m-0 text-gray-400 ">官方合作，到账快</span>
                                    </div>
                                </div>
                            </div>
                            <div @click="clickBank(1)" class="h-[45px] w-full px-3  relative cursor-pointer border border-solid
                 flex items-center  mb-[10px]
                " :class="activeBank == 1 ? ' border-[#eed0a4]' : ' border-[#2f343c] text-white'">
                                <div class="flex items-center">
                                    <img src="@/assets/pc/Home/tcoin.webp"
                                        alt="" class="h-[24px] w-[24px]">
                                    <div class="flex flex-col px-3 text-[13px]">
                                        <span class="p-0 m-0">其他钱包</span>
                                        <span class="text-[11px] p-0 m-0 text-gray-400  ">任意支持USDT的钱包</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <section class="right__section flex-auto h-full">
                <div v-if="!verify" class="relative mx-auto">
                    <div class="flex flex-col">
                        <div class="pay_body w-[390px] mx-auto pt-[20%]">
                            <div class="form_input relative">

                                <section class="w-full  py-3">
                                    <div class="mx-auto bg-[#13151b] py-2 px-3 flex items-center space-x-4">
                                        <h3>协议选择</h3>
                                        <RadioGroup v-model="usdtType">
                                            <div class="flex  space-x-3">
                                                <RadioGroupOption v-slot="{ checked,active }" value="TRC20">
                                                    <div class="flex space-x-3 items-center">
                                                        <div class="w-4 h-4 " :class="[
                                                          active
                                                            ? ''
                                                            : '',
                                                          checked ? 'bg-[rgba(196,146,100)] ' : 'bg-white ',
                                                        ]">
                                                            <div v-show="checked"
                                                                class="shrink-0 text-white flex justify-center items-center h-full">
                                                                <CheckIcon class="w-3 h-3"></CheckIcon>
                                                            </div>
                                                        </div>

                                                        <span :class="checked ? '' : 'text-white'">TRC20</span>
                                                    </div>

                                                </RadioGroupOption>
                                                <RadioGroupOption v-slot="{ checked,active }" value="ERC20">
                                                    <div class="flex space-x-3 items-center">
                                                        <div class="w-4 h-4 " :class="[
                                                          active
                                                            ? ''
                                                            : '',
                                                          checked ? 'bg-[rgba(196,146,100)] ' : 'bg-white ',
                                                        ]">
                                                            <div v-show="checked"
                                                                class="shrink-0 text-white flex justify-center items-center h-full">
                                                                <CheckIcon class="w-3 h-3"></CheckIcon>
                                                            </div>
                                                        </div>

                                                        <span :class="checked ? '' : 'text-white'">ERC20</span>
                                                    </div>
                                                </RadioGroupOption>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                </section>

                                <div
                                    class="bg-[#13151b] my-2   formDiv relative overflow-hidden flex items-center mx-auto px-2 h-14">
                                    <div
                                        class="relative flex items-center justify-center w-20 py-1   border-r border-gray-300 border-solid">
                                        <CurrencyYenIcon class="w-5 h-5 "></CurrencyYenIcon>
                                    </div>
                                    <div
                                        class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                                        <input v-model="amount" autocomplete="off" class=" input-name text-[#d0d0d0]   
                                                        border-none outline-none focus:outline-none focus:border-none    
                                                        w-full h-full" id="amount" pattern="" name="amount"
                                            placeholder="其他金额 20USDT起，最多100万 USDT" min="1" max="100000000" maxlength="9"
                                            type="number" @input="eventName">
                                        <XIcon v-if="amount" @click="amount = ''"
                                            class="h-5 w-5 cursor-pointer  absolute right-3  ">
                                        </XIcon>
                                    </div>
                                </div>
      
                                <div class="money_sec mx-auto my-[20px]">
                                    <div class="w-full p-0 m-0 flex flex-wrap">
                                        <div v-for="(mon, n) in money" :key="n" @click="moneyClick(n,mon)" class="relative w-[117px] h-[44px] text-center
                                         leading-[44px]  text-[17px] mt-[10px] mr-[10px]
                                         border border-solid cursor-pointer
                                        "
                                            :class="activeMoney == n ? '  border-[#eed0a4]': 'text-white  border-[#4a4a4a] '">
                                            {{mon}}</div>
                                    </div>
                                </div>
                            </div>
                            <section class="btn py-5">
                                <div @click="nextStep" class="py-3 cursor-pointer text-base w-full btn_login text-center">
                                    下一步
                                </div>
                            </section>
                        </div>
                        <hr class="hr__">
                    </div>
                </div>
                <div v-if="verify" class="relative mx-auto">
                    <div class="flex flex-col">
                        <div class="pt-[80px] px-5">
                            <div class="flex items-center text-[20px] text-white pb-3">
                                <span>存款信息</span>
                                <span class="text-[12px] text-[#e74747] ml-[8px]">汇率波动，到账金额以实时汇率计算为准</span>
                            </div>
                            <hr class="border-b border-solid border-[#333]">
                            <div class="flex items-center text-[20px] text-white ">
                                <span> 存款金额 </span>
                                <span class="text-lg  ml-[8px]">200 USDT</span>
                                <span class="text-[#cbcbcb] ml-[8px] text-[13px]">约人民币</span>
                                <span class="text-[#e1a948] text-[13px] leading-[62px] ml-[8px]">¥ 1,400.00</span>
                            </div>
                            <hr class="border-b border-solid border-[#333]">
                            <div class="flex justify-between py-10 my-10 w-[565px] ">
                                <div>
                                    <div>
                                        <img class="w-[42px] h-[16px]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAAwCAYAAADXcc6UAAAAAXNSR0IArs4c6QAACNNJREFUeAHtXGtsVUUQnpYKbS0FGiiIKW8kQuBPDT8AFRsLISIWEWM0DQn+QdAWwfijIeEhGmMCFAVReaglWMpDgoAmVCtPNQgUxEiESqlCaQME8QFqhXE/tuuevc9zTu+5j3In3buzZ2fnzM7se+c0hYnEXxISSAN/CFkbW8PPIq4WYVcK0RUR24aUpOFt6yqeCf8Vwu0X4S3RALbZETRpeDtaSiyar4S4L4sGcDCU2EnDh9JOYuctF+LPFQ3gRqBqJA0fSCvt5xnm/yeF8X/1rVLS8L4aaX/pk6JKo3yNH33D9+tHVFxMtHMnUW1t/Kh5/HiiYcOkPH/+SfTuu6ZsnToR9e5NVF9vPk+MFHr+BGPYx6o+KqFTJ+YvvmC+eZNvwYED0Xmv3fqtWSPlwu/Fi1q2rCzml15ibmxkbmhgzs7WeXZ5xwddubWNploTnuJ//0104gRRimh3gNGjiZ56SuLx8PvPP1qKjh013qsX0cKFRHfdRdSnD1G5oT9NF/9YqejgQumtEJXerlo8ektTk+5ZJ07ET+8pL9dyXb9uylVaqvOATZxo5qv6xX+st3hRNTwUU1xsKnH8+PhQ4htvaLlu3DBlSk1l3rdP51+4wJyTY9KEM3peHnNlJfPOnTKMHOmsfDj+9vMno8+nqZ7vOJ49mygz03GxW0P9H+LUMStLln3tNaL8fOd8lottKhZhkQLrUJ8qZsAOHcQOuHULfPMm0fTpRMePyzqDdvhwor177b29oIBo40aiHj00ve/iUed4jb0gXrDN/aq+uZkoN9drIYPzx9wLGQAPPyznYJly9ztZdAQEBc8+S9TSolIyfvpp2WA/+IBINZSrV4k++cSkUyk0nhdfJHr9ddmQ1HPEkyYR7dhhfRItHMe7ubihcTfkNDfroS8WWM+eWu7q6lhIIN958qSWQ+kyN5e5rEzuAoJJ9uij/uVUee/jYvdD/Y8/El28GLqVYgU/dKimOX9enCH5HSLpfCfYv2i4cQgYKd5+m8i6M4g/MQvdG/6BB8JXB/P4779rujlziDZt0ulIYdeume9xwzdNqCIjQ5cETzXH66f+GNYrVhg40N/olZVEOAB6/HErZSzxPPeGtyN2drZJZW0EZk7bUo891rbyKD12LNGXX2o+U6cSffqpTrvB0CheEGsprAnWrXPDwasyvb01vFq5K/G9Mrzi35a4Eb4NFujb15JwiP7wgzzyraiI3NTmUIQw5B4b3ne7F8+Gv3DB1FW/fmbabmrJEqKyMrvUsaLLSvX0zdEa6iNRCTRK63zt1vCXL0dCGs95eDvU9+9vVqCkxFSumRs8BYNgL+w1YLi/5x75FreG91rGCPH31vADBphilpaaabspbANDGX7ECKK1a+1y86ebMYPoyBEiDPdJw/vrx/ETbG0iAeqULBgvLCLvuy9YbvjnnTtLmp9+InrwQYnjVBJrFGzr2iFEr8c3NRF99519FaLnqeE2nOHtcw1N6SsfRqzvvw9dJkFzvTP8HXeYp3YrVxItXmxfTUuXynNulAhnePTU557z53333UTz5unnmC4aGnRaYadOSczX8PAZSBpeaclmjIuTLl00cU2Nxu1gOElTEM7wuKx55x1FrWPM/VbDb91KdPiwzvfFfA2PYT92t2i+0kU07d127okntKBYlR86pNN2MIwYCiJ5/ap4BoqxFcNCUoGdY2lFm2CxN4ZHby0q0qrYs4fI6aWK9ZLDur/WXL3BrCMCpopILVC9kdY1V28MP24cUU6OFuq99zRuF0tP15TRPPH7+GP9XmBqlW8+TfhU5A2Pq9hFi7RisHCCK7VTiJXht283F5Pt2PCWe1On1glAD595qyvVsmXSrSAAachH1gueaB6DwqOmulqLhinLKovKgSsVPHLgppWAAKl9bifaUAvse998UzM4c4boww912glmPefHGUCkAYc2hYVECxYQff450erV+g2bN2sccjzzjE4Dw8ITblobNkiXcauziUkZtynsmRpFEKclbQQ4GsDJQm3hsJiDwq5fd8cYPnUKImX4Rx4hmjZN+vRjqwefOAVVVQojwnD/119EarrBnToaBpwuAXC0VItPGN3pwlVyiekvDP9zmyWAAuFlYh3iX3mF6Jtv3LGGNyo+XlBQV6ew0DF68aBBRIMHy9gqD0qidwcDeMApgHsYDpzmzpVP8GkVPv746COZts772P6pAyBVPhFiUd1iEdw7/qWkMFdUmC6F+DyqQwf3PGfO1PxaWpjT04PzwvtrapjdOH+C99GjzKtWMRcWmu/o3p35t9+0HGfPMnfrJml279bP1683ywXT5bp1ugyw2DpbMrxsu4nQ4sr4aWnM779vVujKFea+fe0pI5CSxo2T364prlByIDrrs/37FXXoGMarqmKeM4d5zBjmjIzQvOfPN/nt3Ss/CFHf/yG3qCg0DyVnvBkeo5JQbE1Y5aoKqDgzk3nXLlMxly8z5+fbU8SsWfIjSnxZsmWL/MqkttbkZ1exr75qlrt0iRlGQk9+/nnmggJmuDwr2e3GnTsznz5t8ram6uvbNrLZlcMDuluzkVDIZMdKWb3aqgI51A4fbl+5MEY4QO/EUB6u4ngvGtJDD7kzcCj+ffoE948vKQkvWyjeMcz7fxkilHswrIKtgnbtyvz119J0584xDxniTAlYA+Bz5ECAuXfFitBzu1UWr/FBg5jr6kxJMUrZaZRey+aSvzhmkyCMPlpgB1TaVoyDjVWriObPJ8Ke3Sng2hPuWXfeKQ9JsDvACv7bb4l++cUpN2/pcSJ5//1EU6YQHTsmdzHY8iUo/G94yC+MXy4il/5RCaqB21RsX8OLLkefiVB4m+rjtqm2YXjUWvT6riL6SoR7kU5C+9SA3w2DaAni2IpGiVDdPqucrBU04Gd4PGw1/gSBLkc6Ce1PAwENj2oK498QYbZAx4iAoT8J7UgDwrb2QMz94h6SxDUViT1NG/6Fir3XJak81oBtwys5RAPoJvCJImDlnydC79YgNvVJSBQN/AcTsQ22nRnvHgAAAABJRU5ErkJggg==" alt="">
                                      <div class="flex items-center text-sm text-white py-1">
                                        <p>用小金库APP扫码，没有小金库？</p>
                                        <p class="underline text-[#c15410]">去下载</p>
                                      </div>
                                    </div>
                                    <div class="mt-[40px]">
                                        <img class="w-[42px] h-[16px]" src="data:image/png;base64,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" alt="">
                                      <div class="flex items-center space-x-3 text-sm text-white py-1">
                                        <p>若无法使用小金库APP，但有账号和余额，请点</p>
                                        <p class=" text-white bg-[#e74747] px-1 py-[2px]">网页支付</p>
                                      </div>
                                    </div>
                                </div>
                                <div class=" space-y-2">
                                    <div class="text-center text-lg text-white">TRC20</div>
                                    <div class="h-[136px] w-[136px] bg-slate-400">

                                    </div>
                                    <p class="text-sm text-[#7e7e7e] text-center">8B8B5E9A</p>

                                </div>
                            </div>
                            <hr class="border-b border-solid border-[#333]">
                            <div class="py-3 w-full  flex justify-center items-center">
                                <div class="py-3 w-[380px]">
                                    <div class="py-3 text-base cursor-pointer w-full btn_login text-center">
                                        已付款，去游戏
                                    </div>
                                    <div class="flex items-center text-[13px] justify-center space-x-5 cursor-pointer text-[#a6a6a6] mt-[20px] ">
                                        <p >成功存款后，系统将立即到账</p>
                                        <p class="underline text-[#9f5b3b] ">查存款记录</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>
  
<script setup>
import { ChevronUpIcon, ChevronDownIcon, XIcon, CurrencyYenIcon, CheckIcon } from "@heroicons/vue/solid";
import { useRouter } from 'vue-router';
import { ref, reactive, onMounted,computed } from 'vue'
import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupDescription,
    RadioGroupOption,
} from '@headlessui/vue'
import { useStore } from "vuex";

const store = useStore()
const router = useRouter()
const activeBank = ref(0)
const activeMoney = ref(0)
const amount = ref('')
const usdtType = ref('TRC20')
const usdtMore = ref(false)
const name = ref('')
const verify = ref(false)

const usdtPic = reactive([
    {id:1,pic:'/public/usdt1.webp',link:'https://bitpie.com/'},
    {id:2,pic:'/public/usdt2.webp',link:'https://www.bixin.com/cn/'},
    {id:3,pic:'/public/usdt3.webp',link:'https://www.coinw.com/'},
    {id:4,pic:'/public/usdt4.webp',link:'https://coins.co.th/'},
    {id:5,pic:'/public/usdt5.webp',link:'https://www.okcoin.com/'},
    {id:6,pic:'/public/usdt6.webp',link:'https://www.gateio.ch/'},
    {id:7,pic:'/public/usdt7.webp',link:'https://pro.coinbase.com/'},
    {id:8,pic:'/public/usdt8.webp',link:'https://coincheck.com/exchange'},
])
const money = ref(["200", "500", "1000", "3000", "5000", "10000"])
const token = computed(() => store.getters["user/LToken"]);

const goUser = () => {
    router.go(-1)
}

const goSite = (link) => {
     window.open(link)
}

const eventName = (e) => {
    if (!/^[0-9]+$/.test(amount.value)) amount.value = amount.value.replace(/\D/g, '');
    if (amount.value > 100000000) amount.value = 100000000;
    if (amount.value < 0) amount.value = null
}

const clickBank = (n) => {
    activeBank.value = n
    console.log(activeBank.value);
}

const nextStep = () => {
    verify.value = true
}

const moneyClick = (n, mon) => {
    activeMoney.value = n
    amount.value = mon
}

onMounted(() => {
    if (!token?.value) return router.push('/login')

})


</script>
  
<style scoped>
.formDiv:focus-within {
    background-color: #ffffff !important;
    color: #272c33 !important;
    outline: 0;
}

.formDiv input {
    border: none;
    outline: none;
    background: no-repeat;
}

.input-name:focus-within {
    border: 0;
    outline: none;
    box-shadow: none;
}

.input-name:focus {
    outline: 0 !important;
    outline: none !important;
    border: none !important;
    color: black !important;
}
.hr__ {
    padding-top: 10%;
    width: 546px;
    margin: 0 auto;
    border: 0;
    border-bottom-width: 1px;
    border-bottom-style: dashed;
    border-bottom-color: #2f343c;
}
</style>