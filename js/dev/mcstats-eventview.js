mcstats.showEvent = function(id) {
    loadJson('data/events/' + id + '.json', function(eventData) {
        var e = mcstats.events[id];
        var awardId = e.link;
        var award = mcstats.awards[awardId];
        var tbody = '';
        var rank = 1;
        eventData.ranking.forEach(function(entry) {
            var rankWidget = mcstats.rankWidget(rank++);
            var playerWidget = mcstats.playerWidget(entry.uuid);
            var value = mcstats.formatValue(entry.value, award.unit);

            tbody += `
                <tr>
                    <td class="text-end">${rankWidget}</th>
                    <td>${playerWidget}</td>
                    <td class="text-data text-end">${value}</td>
                </tr>
            `;
        });

        var eventTime;
        if(e.active) {
            eventTime = `${mcstats.localize('page.eventView.eventStatus.live', [formatTime(e.startTime)])} <br/> ${mcstats.localize('page.eventList.endsAt')} ${formatDate(e.stopTime)}`;
        } else {
            eventTime = mcstats.localize('page.eventView.eventStatus.finished', [formatTime(e.startTime), formatTime(e.stopTime)]);
        }

        mcstats.viewContent.innerHTML = `
            <div class="mcstats-entry p-1">
            <div class="round-box p-1">
                <table class="table table-responsive-xs table-hover table-sm">
                <thead>
                    <th scope="col" class="text-end text-shadow">${mcstats.localize('stat.rank')}</th>
                    <th scope="col" class="text-shadow">${mcstats.localize('stat.player')}</th>
                    <th scope="col" class="text-end text-shadow">${award.desc}</th>
                </thead>
                <tbody>${tbody}</tbody>
                </table>
            </div>
            </div>
        `;

        // show
        mcstats.showView(
            e.title,
            mcstats.localize(e.active ? 'page.eventView.title.active' : 'page.eventView.title.inactive'),
            eventTime,
            'img/award-icons/' + awardId + '.png');
    });
};
