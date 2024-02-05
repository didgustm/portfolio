<script>
    import '@scss/about.scss'
    import photo from '@img/my.jpg'
    import tools from '@img/skill_01.png'
    import markup from '@img/skill_02.png'
    import styles from '@img/skill_03.png'
    import scripts from '@img/skill_04.png';
</script>

<section class="about aos">
    <div class="inner">
        <div class="caption linear fd--d2">
            <span class="line scx--d4"></span>
            <p>About Me</p>
        </div>
        <div class="title">
            <div>
                <p class="ts--d4">My Career and Skills</p>
            </div>
        </div>
        <div class="contents profile fd--d6">
            <div class="info">
                <span class="image"><img src="{photo}" alt="my image"></span>
                <p class="name">Han Yanghyun</p>
                <p class="birth date">1991 .09</p>
            </div>
            <ul class="career">
                <li>
                    <span class="dot"></span>
                    <p class="date">2018 .04 ~ 2018 .10</p>
                    <p class="name">디지털디자인(웹디, 웹퍼블) 양성 교육</p>
                </li>
                <li>
                    <span class="dot"></span>
                    <p class="date">2019 .01 ~ 2023 .12</p>
                    <p class="name">BJPeoples(웹 퍼블리셔)</p>
                </li>
            </ul>
        </div>
        <ul class="contents skills">
            <li class="box rt--d8">
                <dl>
                    <dt>Tools</dt>
                    <dd>
                        <p>- VSCode</p>
                        <p>- Github</p>
                        <p>- Photoshop</p>
                        <p>- XD</p>
                        <p>- Figma</p>
                    </dd>
                </dl>
                <div class="icons">
                    <span class="dot"></span>
                    <img src="{ tools }" alt="">
                </div>
            </li>
            <li class="box rt--d9">
                <dl>
                    <dt>Markup</dt>
                    <dd>
                        <p>- HTML</p>
                        <p>- php</p>
                        <p>- Asp</p>
                        <p>- SVG</p>
                    </dd>
                </dl>
                <div class="icons">
                    <span class="dot"></span>
                    <img src="{ markup }" alt="">
                </div>
            </li>
            <li class="box rt--d10">
                <dl>
                    <dt>Styles</dt>
                    <dd>
                        <p>- CSS</p>
                        <p>- CSS Module</p>
                        <p>- Scss</p>
                    </dd>
                </dl>
                <div class="icons">
                    <span class="dot"></span>
                    <img src="{ styles }" alt="">
                </div>
            </li>
            <li class="box rt--d11">
                <dl>
                    <dt>Scripts</dt>
                    <dd>
                        <p>- Javscript</p>
                        <p>- ES6 Module</p>
                        <p>- jQuery</p>
                        <p>- Canvas</p>
                        <p>- Svelte</p>
                    </dd>
                </dl>
                <div class="icons">
                    <span class="dot"></span>
                    <img src="{ scripts }" alt="">
                </div>
            </li>
        </ul>
    </div>
</section>