// =============================================================
// SVG illustrations — schematic stick figures with stretch zones
// =============================================================
// Each illustration is 320x260, designed to feel hand-drawn but precise.
// Orange accent shows direction of stretch / target zone.

const ILLUS = {
  // -------- WARM-UP --------
  catCow: `<svg class="illus" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
    <line class="ground" x1="20" y1="220" x2="300" y2="220"/>
    <!-- cat-cow on hands & knees, arched up like a cat -->
    <!-- arched back (cat) -->
    <path class="body" d="M90 200 Q90 130 160 110 Q230 130 230 200" fill="none"/>
    <!-- front arms straight down -->
    <line class="body" x1="90" y1="200" x2="90" y2="220"/>
    <!-- back legs -->
    <line class="body" x1="230" y1="200" x2="230" y2="220"/>
    <!-- thighs forward to knees -->
    <line class="body" x1="230" y1="200" x2="245" y2="220"/>
    <!-- head hanging down -->
    <line class="body" x1="90" y1="200" x2="65" y2="225"/>
    <circle class="head" cx="60" cy="230" r="12"/>
    <!-- arrows showing movement up & down -->
    <path class="arrow" d="M160 70 L160 95"/>
    <polygon class="arrow-head" points="155,93 165,93 160,103"/>
    <path class="arrow" d="M160 130 L160 165" stroke-dasharray="3 3"/>
    <polygon class="arrow-head" points="155,163 165,163 160,173" opacity="0.5"/>
  </svg>`,

  shoulderCircles: `<svg class="illus" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
    <line class="ground" x1="20" y1="240" x2="300" y2="240"/>
    <!-- standing figure -->
    <circle class="head" cx="160" cy="55" r="16"/>
    <line class="body" x1="160" y1="71" x2="160" y2="180"/>
    <!-- legs -->
    <line class="body" x1="160" y1="180" x2="135" y2="240"/>
    <line class="body" x1="160" y1="180" x2="185" y2="240"/>
    <!-- shoulders & arms -->
    <line class="body" x1="125" y1="95" x2="195" y2="95"/>
    <line class="body" x1="125" y1="95" x2="105" y2="150"/>
    <line class="body" x1="195" y1="95" x2="215" y2="150"/>
    <!-- circular arrows over both shoulders -->
    <circle class="arrow" cx="125" cy="95" r="22" stroke-dasharray="4 3" fill="none"/>
    <polygon class="arrow-head" points="143,90 150,98 138,102"/>
    <circle class="arrow" cx="195" cy="95" r="22" stroke-dasharray="4 3" fill="none"/>
    <polygon class="arrow-head" points="177,90 170,98 182,102"/>
  </svg>`,

  sideBend: `<svg class="illus" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
    <line class="ground" x1="20" y1="240" x2="300" y2="240"/>
    <!-- figure bending right, arms up -->
    <circle class="head" cx="180" cy="65" r="15"/>
    <!-- curved spine -->
    <path class="body" d="M180 80 Q175 130 155 175"/>
    <!-- legs -->
    <line class="body" x1="155" y1="175" x2="140" y2="240"/>
    <line class="body" x1="155" y1="175" x2="170" y2="240"/>
    <!-- arms reaching up & curving -->
    <path class="body" d="M180 90 Q210 75 230 40"/>
    <path class="body" d="M180 95 Q200 85 220 45"/>
    <!-- side stretch glow -->
    <ellipse class="stretch-glow" cx="200" cy="125" rx="14" ry="40" transform="rotate(-15 200 125)"/>
    <path class="arrow" d="M85 130 Q120 115 145 130"/>
    <polygon class="arrow-head" points="142,125 150,131 142,137"/>
  </svg>`,

  legSwings: `<svg class="illus" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
    <line class="ground" x1="20" y1="240" x2="300" y2="240"/>
    <!-- wall on the right -->
    <line class="body" x1="285" y1="30" x2="285" y2="240" stroke-width="4"/>
    <!-- standing figure -->
    <circle class="head" cx="200" cy="55" r="15"/>
    <line class="body" x1="200" y1="70" x2="200" y2="170"/>
    <!-- arm reaching to wall for support -->
    <line class="body" x1="200" y1="95" x2="280" y2="115"/>
    <!-- standing leg planted -->
    <line class="body" x1="200" y1="170" x2="200" y2="240"/>
    <!-- swinging leg lifted forward (solid) -->
    <line class="body" x1="200" y1="170" x2="120" y2="160"/>
    <!-- ghost/dashed leg showing back position -->
    <line class="body" x1="200" y1="170" x2="170" y2="240" stroke-dasharray="4 3" opacity="0.4"/>
    <!-- motion arc -->
    <path class="arrow" d="M125 175 Q160 205 175 235" stroke-dasharray="4 3"/>
    <polygon class="arrow-head" points="170,225 180,232 175,240"/>
    <!-- forward arrow above lifted leg -->
    <path class="arrow" d="M120 140 L100 155"/>
    <polygon class="arrow-head" points="105,150 95,158 105,162"/>
  </svg>`,

  squat: `<svg class="illus" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
    <line class="ground" x1="20" y1="240" x2="300" y2="240"/>
    <!-- half-squat with hips lowered -->
    <circle class="head" cx="160" cy="55" r="15"/>
    <!-- short upright torso -->
    <line class="body" x1="160" y1="70" x2="160" y2="155"/>
    <!-- arms straight forward for balance -->
    <line class="body" x1="160" y1="95" x2="220" y2="115"/>
    <line class="body" x1="160" y1="95" x2="100" y2="115"/>
    <!-- thighs going down/forward to bent knees -->
    <line class="body" x1="160" y1="155" x2="115" y2="190"/>
    <line class="body" x1="160" y1="155" x2="205" y2="190"/>
    <!-- shins down to feet -->
    <line class="body" x1="115" y1="190" x2="125" y2="240"/>
    <line class="body" x1="205" y1="190" x2="195" y2="240"/>
    <!-- feet -->
    <line class="body" x1="115" y1="240" x2="140" y2="240"/>
    <line class="body" x1="180" y1="240" x2="205" y2="240"/>
    <!-- knee joints -->
    <circle class="joint" cx="115" cy="190" r="4"/>
    <circle class="joint" cx="205" cy="190" r="4"/>
    <!-- down arrow next to body -->
    <path class="arrow" d="M255 100 L255 160"/>
    <polygon class="arrow-head" points="250,155 260,155 255,170"/>
    <!-- glow at thighs -->
    <ellipse class="stretch-glow" cx="160" cy="180" rx="50" ry="10"/>
  </svg>`,

  // -------- CHEST --------
  doorwayStretch: `<svg class="illus" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
    <line class="ground" x1="20" y1="240" x2="300" y2="240"/>
    <!-- door frame -->
    <line class="body" x1="220" y1="20" x2="220" y2="240" stroke-width="4"/>
    <!-- figure stepping forward, forearm on frame -->
    <circle class="head" cx="155" cy="65" r="15"/>
    <line class="body" x1="155" y1="80" x2="155" y2="170"/>
    <!-- arm bent on doorframe -->
    <line class="body" x1="155" y1="100" x2="195" y2="80"/>
    <line class="body" x1="195" y1="80" x2="220" y2="60"/>
    <!-- other arm down -->
    <line class="body" x1="155" y1="100" x2="135" y2="155"/>
    <!-- legs in lunge -->
    <line class="body" x1="155" y1="170" x2="125" y2="240"/>
    <line class="body" x1="155" y1="170" x2="190" y2="240"/>
    <!-- chest stretch glow -->
    <ellipse class="stretch-glow" cx="180" cy="105" rx="35" ry="18" transform="rotate(-25 180 105)"/>
    <!-- forward arrow -->
    <path class="arrow" d="M80 120 L130 120"/>
    <polygon class="arrow-head" points="125,115 137,120 125,125"/>
  </svg>`,

  sphinx: `<svg class="illus" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
    <line class="ground" x1="20" y1="220" x2="300" y2="220"/>
    <!-- sphinx pose: lying on belly, propped on forearms, viewed from side -->
    <!-- legs lying flat -->
    <line class="body" x1="180" y1="195" x2="290" y2="195"/>
    <line class="body" x1="180" y1="208" x2="290" y2="208"/>
    <!-- hips area -->
    <ellipse class="body" cx="180" cy="200" rx="14" ry="10"/>
    <!-- torso lifted, curving up -->
    <path class="body" d="M170 195 Q140 175 110 145"/>
    <!-- forearms on ground supporting -->
    <line class="body" x1="80" y1="210" x2="135" y2="210"/>
    <line class="body" x1="135" y1="210" x2="115" y2="155"/>
    <!-- head looking up/forward -->
    <circle class="head" cx="100" cy="135" r="13"/>
    <!-- chest open glow -->
    <ellipse class="stretch-glow" cx="125" cy="170" rx="22" ry="16" transform="rotate(-25 125 170)"/>
    <!-- arrow showing chest opening -->
    <path class="arrow" d="M170 105 Q150 115 130 130"/>
    <polygon class="arrow-head" points="135,128 125,134 128,142"/>
  </svg>`,

  shoulderLock: `<svg class="illus" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
    <line class="ground" x1="20" y1="240" x2="300" y2="240"/>
    <!-- standing figure, viewed from front -->
    <circle class="head" cx="160" cy="55" r="16"/>
    <line class="body" x1="160" y1="71" x2="160" y2="190"/>
    <line class="body" x1="160" y1="190" x2="135" y2="240"/>
    <line class="body" x1="160" y1="190" x2="185" y2="240"/>
    <!-- arms forming a clasp behind back: one over shoulder, one under -->
    <!-- top arm -->
    <line class="body" x1="160" y1="90" x2="200" y2="80"/>
    <line class="body" x1="200" y1="80" x2="195" y2="125"/>
    <!-- bottom arm -->
    <line class="body" x1="160" y1="115" x2="125" y2="125"/>
    <line class="body" x1="125" y1="125" x2="155" y2="145"/>
    <!-- meeting point glow -->
    <circle class="stretch-glow" cx="175" cy="135" r="22"/>
    <!-- strap (dashed) connecting hands -->
    <line class="arrow" x1="195" y1="125" x2="155" y2="145" stroke-dasharray="4 3"/>
  </svg>`,

  // -------- QUADS / HIP FLEXORS --------
  kneelLunge: `<svg class="illus" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
    <line class="ground" x1="20" y1="240" x2="300" y2="240"/>
    <!-- low lunge: front foot flat, back knee on ground -->
    <!-- back leg: knee on ground, lower leg back -->
    <line class="body" x1="60" y1="240" x2="130" y2="200"/>
    <line class="body" x1="130" y1="200" x2="180" y2="200"/>
    <circle class="joint" cx="130" cy="200" r="4"/>
    <!-- hip up -->
    <line class="body" x1="180" y1="200" x2="180" y2="100"/>
    <!-- front leg bent at 90deg -->
    <line class="body" x1="180" y1="200" x2="220" y2="200"/>
    <line class="body" x1="220" y1="200" x2="220" y2="240"/>
    <circle class="joint" cx="220" cy="200" r="4"/>
    <!-- arms up or on knee -->
    <line class="body" x1="180" y1="130" x2="220" y2="160"/>
    <line class="body" x1="180" y1="130" x2="160" y2="100"/>
    <!-- head -->
    <circle class="head" cx="180" cy="85" r="14"/>
    <!-- stretch glow on front of back thigh -->
    <ellipse class="stretch-glow" cx="155" cy="195" rx="35" ry="14"/>
    <path class="arrow" d="M120 160 Q140 175 160 178"/>
    <polygon class="arrow-head" points="155,173 165,178 158,184"/>
  </svg>`,

  sideQuad: `<svg class="illus" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
    <line class="ground" x1="20" y1="225" x2="300" y2="225"/>
    <!-- side-lying figure pulling foot to butt -->
    <!-- head on left -->
    <circle class="head" cx="55" cy="200" r="14"/>
    <!-- torso lying horizontal on the ground -->
    <line class="body" x1="69" y1="200" x2="180" y2="200"/>
    <!-- supporting bottom arm propping head up -->
    <line class="body" x1="55" y1="200" x2="35" y2="225"/>
    <!-- bottom leg straight along ground -->
    <line class="body" x1="180" y1="200" x2="285" y2="220"/>
    <!-- top leg bent: thigh stays in line, shin folded back -->
    <line class="body" x1="180" y1="200" x2="245" y2="170"/>
    <line class="body" x1="245" y1="170" x2="195" y2="195"/>
    <circle class="joint" cx="245" cy="170" r="5"/>
    <!-- top arm reaching to grab the foot -->
    <line class="body" x1="155" y1="195" x2="195" y2="195"/>
    <!-- stretch glow on front of thigh -->
    <ellipse class="stretch-glow" cx="220" cy="190" rx="22" ry="12" transform="rotate(-25 220 190)"/>
    <!-- arrow showing pull direction (toward butt) -->
    <path class="arrow" d="M210 155 Q200 175 200 195"/>
    <polygon class="arrow-head" points="195,188 205,188 200,200"/>
  </svg>`,

  heroPose: `<svg class="illus" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
    <line class="ground" x1="20" y1="240" x2="300" y2="240"/>
    <!-- side view of kneeling on heels -->
    <!-- folded leg: thigh forward, shin folded back under -->
    <line class="body" x1="100" y1="240" x2="240" y2="240"/>
    <!-- thigh going up -->
    <line class="body" x1="240" y1="240" x2="180" y2="195"/>
    <line class="body" x1="240" y1="240" x2="240" y2="225"/>
    <!-- knee joint -->
    <circle class="joint" cx="180" cy="195" r="5"/>
    <!-- hip on top of heels -->
    <ellipse class="body" cx="170" cy="190" rx="14" ry="8"/>
    <!-- upright torso -->
    <line class="body" x1="170" y1="183" x2="170" y2="100"/>
    <!-- arms resting on thigh -->
    <line class="body" x1="170" y1="120" x2="200" y2="200"/>
    <line class="body" x1="170" y1="120" x2="195" y2="160"/>
    <!-- head -->
    <circle class="head" cx="170" cy="85" r="14"/>
    <!-- stretch glow on top of thigh -->
    <ellipse class="stretch-glow" cx="205" cy="220" rx="32" ry="10"/>
  </svg>`,

  // -------- LOWER BACK --------
  kneesToChest: `<svg class="illus" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
    <line class="ground" x1="20" y1="225" x2="300" y2="225"/>
    <!-- supine, knees pulled to chest, side view, scaled larger -->
    <!-- head on the ground, left -->
    <circle class="head" cx="40" cy="195" r="15"/>
    <!-- back lying flat -->
    <line class="body" x1="55" y1="200" x2="160" y2="205"/>
    <!-- thighs going up nearly vertical -->
    <line class="body" x1="160" y1="205" x2="155" y2="105"/>
    <!-- shins folded back -->
    <line class="body" x1="155" y1="105" x2="100" y2="155"/>
    <line class="body" x1="155" y1="105" x2="95" y2="135"/>
    <circle class="joint" cx="155" cy="105" r="6"/>
    <!-- arms hugging shins -->
    <line class="body" x1="90" y1="195" x2="125" y2="160"/>
    <line class="body" x1="125" y1="160" x2="140" y2="140"/>
    <!-- glow at lower back -->
    <ellipse class="stretch-glow" cx="135" cy="205" rx="30" ry="11"/>
    <!-- arrow pulling knees in -->
    <path class="arrow" d="M225 80 Q190 95 165 110"/>
    <polygon class="arrow-head" points="172,113 160,113 165,103"/>
  </svg>`,

  spinalTwist: `<svg class="illus" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
    <line class="ground" x1="20" y1="225" x2="300" y2="225"/>
    <!-- supine twist viewed from above -->
    <!-- head on the left -->
    <circle class="head" cx="50" cy="200" r="14"/>
    <!-- shoulders/torso lying flat -->
    <line class="body" x1="64" y1="200" x2="200" y2="200"/>
    <!-- both arms out to sides (shoulders pinned) -->
    <line class="body" x1="120" y1="200" x2="120" y2="155"/>
    <line class="body" x1="120" y1="200" x2="120" y2="245" stroke-dasharray="3 3" opacity="0.5"/>
    <!-- one leg straight along ground -->
    <line class="body" x1="200" y1="200" x2="285" y2="215"/>
    <!-- other leg crossed across body to the opposite side -->
    <line class="body" x1="200" y1="200" x2="195" y2="155"/>
    <line class="body" x1="195" y1="155" x2="155" y2="135"/>
    <circle class="joint" cx="195" cy="155" r="5"/>
    <!-- twisting arrow over hips -->
    <path class="arrow" d="M240 175 Q220 145 195 145"/>
    <polygon class="arrow-head" points="200,140 188,148 197,154"/>
    <!-- glow along spine -->
    <ellipse class="stretch-glow" cx="160" cy="200" rx="40" ry="10"/>
  </svg>`,

  childPose: `<svg class="illus" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
    <line class="ground" x1="20" y1="240" x2="300" y2="240"/>
    <!-- child's pose, side view: butt on heels, forehead and arms on ground -->
    <!-- folded leg on right side -->
    <line class="body" x1="220" y1="240" x2="285" y2="240"/>
    <line class="body" x1="220" y1="240" x2="220" y2="218"/>
    <line class="body" x1="285" y1="240" x2="285" y2="218"/>
    <!-- thighs going forward and down (folded shins under butt) -->
    <line class="body" x1="220" y1="218" x2="180" y2="225"/>
    <!-- big curved arc representing back/torso folded forward over thighs -->
    <path class="body" d="M180 225 Q150 195 120 235" fill="none"/>
    <!-- arms extended forward on ground -->
    <line class="body" x1="120" y1="235" x2="40" y2="240"/>
    <line class="body" x1="125" y1="240" x2="50" y2="240"/>
    <!-- head down forehead on ground -->
    <circle class="head" cx="115" cy="234" r="11"/>
    <!-- glow on lower back -->
    <ellipse class="stretch-glow" cx="170" cy="215" rx="32" ry="11" transform="rotate(-12 170 215)"/>
    <!-- forward arrow -->
    <path class="arrow" d="M155 195 L100 220"/>
    <polygon class="arrow-head" points="108,215 95,222 105,228"/>
  </svg>`,

  threadNeedle: `<svg class="illus" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
    <line class="ground" x1="20" y1="240" x2="300" y2="240"/>
    <!-- thread the needle pose, shoulder & cheek on ground, hips up -->
    <!-- knees on ground (right side) -->
    <line class="body" x1="220" y1="170" x2="220" y2="240"/>
    <line class="body" x1="245" y1="170" x2="245" y2="240"/>
    <!-- thighs going forward to hips -->
    <line class="body" x1="220" y1="170" x2="180" y2="170"/>
    <line class="body" x1="245" y1="170" x2="200" y2="170"/>
    <!-- back curving down toward the ground (twisted) -->
    <path class="body" d="M180 170 Q140 195 100 230"/>
    <!-- supporting arm reaching up/forward -->
    <line class="body" x1="190" y1="175" x2="200" y2="100"/>
    <!-- threaded arm going under, ending on ground -->
    <line class="body" x1="160" y1="200" x2="60" y2="230"/>
    <!-- head down on the ground (cheek on mat) -->
    <circle class="head" cx="100" cy="225" r="13"/>
    <!-- glow at upper back/shoulder being stretched -->
    <ellipse class="stretch-glow" cx="135" cy="210" rx="28" ry="10" transform="rotate(-15 135 210)"/>
    <!-- arrow showing the threading direction -->
    <path class="arrow" d="M85 200 L60 215"/>
    <polygon class="arrow-head" points="65,210 55,218 65,222"/>
  </svg>`,

  // -------- CLOSING --------
  shavasana: `<svg class="illus" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
    <line class="ground" x1="20" y1="200" x2="300" y2="200"/>
    <!-- lying flat on back -->
    <circle class="head" cx="60" cy="180" r="14"/>
    <line class="body" x1="74" y1="180" x2="240" y2="180"/>
    <!-- arms slightly out -->
    <line class="body" x1="120" y1="180" x2="105" y2="195"/>
    <line class="body" x1="160" y1="180" x2="180" y2="195"/>
    <!-- legs slightly apart -->
    <line class="body" x1="240" y1="180" x2="280" y2="170"/>
    <line class="body" x1="240" y1="180" x2="280" y2="190"/>
    <!-- z's for relaxation -->
    <text x="80" y="140" fill="var(--ink-faint)" font-family="serif" font-style="italic" font-size="22" opacity="0.6">~ ~ ~</text>
  </svg>`,

  jumpingJacks: `<svg class="illus" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
    <line class="ground" x1="20" y1="240" x2="300" y2="240"/>
    <!-- mid-jump, legs apart, arms up -->
    <circle class="head" cx="160" cy="50" r="15"/>
    <line class="body" x1="160" y1="65" x2="160" y2="170"/>
    <!-- arms up -->
    <line class="body" x1="160" y1="85" x2="115" y2="35"/>
    <line class="body" x1="160" y1="85" x2="205" y2="35"/>
    <!-- legs apart -->
    <line class="body" x1="160" y1="170" x2="115" y2="240"/>
    <line class="body" x1="160" y1="170" x2="205" y2="240"/>
    <!-- motion lines -->
    <line class="arrow" x1="80" y1="60" x2="100" y2="50" stroke-dasharray="3 3"/>
    <line class="arrow" x1="220" y1="50" x2="240" y2="60" stroke-dasharray="3 3"/>
    <line class="arrow" x1="160" y1="225" x2="160" y2="240" stroke-dasharray="3 3"/>
  </svg>`,

  dynamicLunge: `<svg class="illus" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
    <line class="ground" x1="20" y1="240" x2="300" y2="240"/>
    <!-- forward lunge, both feet planted -->
    <circle class="head" cx="170" cy="55" r="15"/>
    <line class="body" x1="170" y1="70" x2="170" y2="160"/>
    <!-- arms -->
    <line class="body" x1="170" y1="95" x2="135" y2="155"/>
    <line class="body" x1="170" y1="95" x2="205" y2="135"/>
    <!-- front leg bent -->
    <line class="body" x1="170" y1="160" x2="220" y2="200"/>
    <line class="body" x1="220" y1="200" x2="220" y2="240"/>
    <circle class="joint" cx="220" cy="200" r="4"/>
    <!-- back leg straight -->
    <line class="body" x1="170" y1="160" x2="115" y2="240"/>
    <!-- forward arrow -->
    <path class="arrow" d="M250 200 L290 200"/>
    <polygon class="arrow-head" points="285,195 295,200 285,205"/>
  </svg>`,

  rotations: `<svg class="illus" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
    <line class="ground" x1="20" y1="240" x2="300" y2="240"/>
    <!-- standing, hands on hips, hip circle -->
    <circle class="head" cx="160" cy="55" r="15"/>
    <line class="body" x1="160" y1="71" x2="160" y2="170"/>
    <!-- hands on hips -->
    <line class="body" x1="160" y1="120" x2="125" y2="145"/>
    <line class="body" x1="125" y1="145" x2="140" y2="155"/>
    <line class="body" x1="160" y1="120" x2="195" y2="145"/>
    <line class="body" x1="195" y1="145" x2="180" y2="155"/>
    <!-- legs -->
    <line class="body" x1="160" y1="170" x2="135" y2="240"/>
    <line class="body" x1="160" y1="170" x2="185" y2="240"/>
    <!-- circular arrow around hips -->
    <ellipse class="arrow" cx="160" cy="155" rx="50" ry="20" stroke-dasharray="4 3" fill="none"/>
    <polygon class="arrow-head" points="205,150 213,158 200,164"/>
  </svg>`,

  pushupKnee: `<svg class="illus" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
    <line class="ground" x1="20" y1="240" x2="300" y2="240"/>
    <!-- knee push-up, mid-position -->
    <!-- body line angled, knees on ground -->
    <line class="body" x1="80" y1="180" x2="220" y2="225"/>
    <!-- arm down to ground -->
    <line class="body" x1="80" y1="180" x2="80" y2="240"/>
    <!-- knees on ground -->
    <line class="body" x1="220" y1="225" x2="240" y2="240"/>
    <circle class="joint" cx="220" cy="225" r="4"/>
    <!-- head -->
    <circle class="head" cx="65" cy="172" r="14"/>
    <!-- motion arrow up/down -->
    <path class="arrow" d="M150 145 L150 175"/>
    <polygon class="arrow-head" points="145,170 155,170 150,182"/>
    <path class="arrow" d="M150 215 L150 240" stroke-dasharray="3 3"/>
  </svg>`
};

// =============================================================
// Exercise definitions
// =============================================================

const SECTIONS = {
  warmup: { name: "Разминка", color: "#C4623F" },
  warmupExt: { name: "Расширенная разминка", color: "#C4623F" },
  chest: { name: "Грудь", color: "#C4623F" },
  quads: { name: "Передняя поверхность бедра", color: "#C4623F" },
  back: { name: "Поясница", color: "#C4623F" },
  closing: { name: "Завершение", color: "#C4623F" }
};

// Each exercise: id, name, section, duration (sec), hint, illustration, sides (if has L/R)
const EX = {
  // === WARM-UP (30 min: 5 min) ===
  catCow: { name: "Кошка-корова", section: "warmup", duration: 60, hint: "На четвереньках, медленно прогибаемся и округляем спину. 10 повторов.", illus: ILLUS.catCow },
  shoulderCircles: { name: "Круги плечами", section: "warmup", duration: 60, hint: "Вперёд и назад, плавно, амплитуда максимальная. По 10 в каждую сторону.", illus: ILLUS.shoulderCircles },
  sideBend: { name: "Наклоны корпуса", section: "warmup", duration: 60, hint: "Стоя, руки над головой. В стороны, 10 раз.", illus: ILLUS.sideBend },
  legSwings: { name: "Махи ногами", section: "warmup", duration: 60, hint: "Держась за стену. Вперёд-назад, по 10 на каждую ногу.", illus: ILLUS.legSwings },
  squats: { name: "Полуприседы", section: "warmup", duration: 60, hint: "Медленно, до уровня выше параллели с полом. 10 раз.", illus: ILLUS.squat },

  // === EXTENDED WARM-UP (40 min: extra 10 min) ===
  marchInPlace: { name: "Ходьба на месте с подъёмом коленей", section: "warmupExt", duration: 120, hint: "Бодро, дышим ровно, колени поднимаем выше.", illus: ILLUS.dynamicLunge },
  jumpingJacks: { name: "Лёгкие прыжки или быстрая ходьба", section: "warmupExt", duration: 30, hint: "Если соседи не против — прыжки. Иначе быстрая ходьба.", illus: ILLUS.jumpingJacks },
  dynamicLunges: { name: "Динамические выпады", section: "warmupExt", duration: 60, hint: "Поочерёдно на каждую ногу, без задержки. 10 раз.", illus: ILLUS.dynamicLunge },
  rotations: { name: "Вращения тазом и корпусом", section: "warmupExt", duration: 90, hint: "Плавно, без резких движений. По 30 секунд каждая зона.", illus: ILLUS.rotations },
  pushups: { name: "Отжимания с колен", section: "warmupExt", duration: 60, hint: "Опционально, для тонуса. 5–10 повторов.", illus: ILLUS.pushupKnee },
  // (5 minutes of regular warmup follows after extended)

  // === CHEST (7 min) ===
  doorwayL: { name: "Растяжка в дверном проёме — левая", section: "chest", duration: 60, hint: "Левое предплечье на косяк, шагните вперёд. Чувствуем грудную мышцу.", illus: ILLUS.doorwayStretch },
  doorwayR: { name: "Растяжка в дверном проёме — правая", section: "chest", duration: 60, hint: "Правое предплечье на косяк, шагните вперёд. Не задирайте плечо.", illus: ILLUS.doorwayStretch },
  doorwayL2: { name: "Дверной проём — левая, второй подход", section: "chest", duration: 60, hint: "Шагните чуть глубже. Дыхание ровное.", illus: ILLUS.doorwayStretch },
  doorwayR2: { name: "Дверной проём — правая, второй подход", section: "chest", duration: 60, hint: "Шагните чуть глубже. Дыхание ровное.", illus: ILLUS.doorwayStretch },
  sphinx: { name: "Сфинкс", section: "chest", duration: 90, hint: "Лёжа на животе, приподняться на предплечьях. Плечи опущены, грудь вперёд.", illus: ILLUS.sphinx },
  shoulderLockL: { name: "Замок за спиной — левая сверху", section: "chest", duration: 45, hint: "Левая рука сверху через плечо, правая снизу. Не достаёте — держите ремень.", illus: ILLUS.shoulderLock },
  shoulderLockR: { name: "Замок за спиной — правая сверху", section: "chest", duration: 45, hint: "Правая рука сверху через плечо, левая снизу. Не достаёте — держите ремень.", illus: ILLUS.shoulderLock },

  // === QUADS / HIP FLEXORS (8 min) ===
  lungeL: { name: "Выпад с опусканием колена — левая нога сзади", section: "quads", duration: 60, hint: "Заднее колено на коврике (на подушке если больно). Таз подаём вперёд.", illus: ILLUS.kneelLunge },
  lungeR: { name: "Выпад с опусканием колена — правая нога сзади", section: "quads", duration: 60, hint: "Заднее колено на коврике. Таз подаём вперёд, не наклоняемся.", illus: ILLUS.kneelLunge },
  lungeL2: { name: "Выпад — левая, второй подход", section: "quads", duration: 60, hint: "Углубите растяжение, если ощущения позволяют.", illus: ILLUS.kneelLunge },
  lungeR2: { name: "Выпад — правая, второй подход", section: "quads", duration: 60, hint: "Углубите растяжение, если ощущения позволяют.", illus: ILLUS.kneelLunge },
  sideQuadL: { name: "Квадрицепс лёжа на боку — левая нога", section: "quads", duration: 60, hint: "Лёжа на правом боку. Левой рукой захватите левую стопу, потяните пятку к ягодице.", illus: ILLUS.sideQuad },
  sideQuadR: { name: "Квадрицепс лёжа на боку — правая нога", section: "quads", duration: 60, hint: "Лёжа на левом боку. Правой рукой захватите правую стопу, потяните пятку к ягодице.", illus: ILLUS.sideQuad },
  hero: { name: "Поза героя", section: "quads", duration: 60, hint: "Сидя на пятках, колени вместе. Тяжело — подложите подушку под ягодицы.", illus: ILLUS.heroPose },

  // === LOWER BACK (8 min) ===
  kneesToChest: { name: "Колени к груди лёжа", section: "back", duration: 60, hint: "Обе ноги к груди. Можно мягко покачаться вперёд-назад.", illus: ILLUS.kneesToChest },
  twistL: { name: "Скрутка лёжа — колено влево", section: "back", duration: 60, hint: "На спине, правое колено перекидываем влево. Плечи прижаты к полу.", illus: ILLUS.spinalTwist },
  twistR: { name: "Скрутка лёжа — колено вправо", section: "back", duration: 60, hint: "На спине, левое колено перекидываем вправо. Плечи прижаты к полу.", illus: ILLUS.spinalTwist },
  child: { name: "Поза ребёнка", section: "back", duration: 90, hint: "Колени разведены. Таз тянется к пяткам, руки вытянуты вперёд.", illus: ILLUS.childPose },
  threadL: { name: "Игольная нитка — левая рука под", section: "back", duration: 45, hint: "На четвереньках. Левую руку продеваем под правой, плечо ложится на пол.", illus: ILLUS.threadNeedle },
  threadR: { name: "Игольная нитка — правая рука под", section: "back", duration: 45, hint: "На четвереньках. Правую руку продеваем под левой, плечо ложится на пол.", illus: ILLUS.threadNeedle },

  // === CLOSING (2 min) ===
  shavasana: { name: "Шавасана", section: "closing", duration: 120, hint: "Лёжа на спине, расслабление, глубокое дыхание. Полностью отпустите тело.", illus: ILLUS.shavasana }
};

// =============================================================
// Programs
// =============================================================

const PROGRAM_30 = [
  // Warm-up (5 min)
  "catCow", "shoulderCircles", "sideBend", "legSwings", "squats",
  // Chest (7 min ≈ 420s — adjusted)
  "doorwayL", "doorwayR", "sphinx", "shoulderLockL", "shoulderLockR",
  // Quads (8 min)
  "lungeL", "lungeR", "sideQuadL", "sideQuadR", "hero",
  // Back (8 min)
  "kneesToChest", "twistL", "twistR", "child", "threadL", "threadR",
  // Closing (2 min)
  "shavasana"
];

const PROGRAM_40 = [
  // Extended warm-up (10 min)
  "marchInPlace", "jumpingJacks", "dynamicLunges", "rotations", "pushups",
  // Standard warm-up (5 min)
  "catCow", "shoulderCircles", "sideBend", "legSwings", "squats",
  // Chest (7 min)
  "doorwayL", "doorwayR", "sphinx", "shoulderLockL", "shoulderLockR",
  // Quads (8 min)
  "lungeL", "lungeR", "sideQuadL", "sideQuadR", "hero",
  // Back (8 min)
  "kneesToChest", "twistL", "twistR", "child", "threadL", "threadR",
  // Closing (2 min)
  "shavasana"
];

window.STRETCH_DATA = { EX, ILLUS, SECTIONS, PROGRAM_30, PROGRAM_40 };
