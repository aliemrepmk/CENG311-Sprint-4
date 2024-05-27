document.addEventListener("DOMContentLoaded", function() {
    const clubTitle = document.querySelector(".club-title");
    clubTitle.addEventListener("click", function() {
        window.location.href = "index.html";
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const members = [
        { name: "Ali Emre Pamuk", role: "Hiking Leader", img: "assets/logos/aybu.jpg", infoFile: "data/ali_emre_pamuk.json" },
        { name: "Mert Altekin", role: "Event Coordinator", img: "assets/logos/aybu.jpg", infoFile: "data/mert_altekin.json" },
        { name: "Mert Altekin", role: "Event Coordinator", img: "assets/logos/aybu.jpg", infoFile: "data/mert_altekin.json" },
        { name: "Ali Emre Pamuk", role: "Hiking Leader", img: "assets/logos/aybu.jpg", infoFile: "data/ali_emre_pamuk.json" },
        { name: "Ali Emre Pamuk", role: "Hiking Leader", img: "assets/logos/aybu.jpg", infoFile: "data/ali_emre_pamuk.json" },
        { name: "Mert Altekin", role: "Event Coordinator", img: "assets/logos/aybu.jpg", infoFile: "data/mert_altekin.json" },
    ];

    const membersContainer = document.getElementById('members');
    const modal = document.getElementById('memberModal');
    const modalImg = document.getElementById('modalImg');
    const memberInfo = document.getElementById('memberInfo');
    const closeModal = document.getElementsByClassName('close')[0];

    members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'member';
        memberDiv.innerHTML = `
            <img src="${member.img}" alt="${member.name}">
            <div class="role">${member.role}</div>
        `;
        memberDiv.addEventListener('click', () => showMemberInfo(member));
        membersContainer.appendChild(memberDiv);
    });

    closeModal.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    function showMemberInfo(member) {
        fetch(member.infoFile)
            .then(response => response.json())
            .then(data => {
                modalImg.src = member.img;
                memberInfo.innerHTML = `
                    <h2>${data.name}</h2><br>
                    <p>Age: ${data.age}</p>
                    <p>Role: ${data.role}</p><br>
                    <p>${data.description}</p>`;
                modal.style.display = 'flex';
            })
            .catch(error => console.error('Error fetching member info:', error));
    }
});
