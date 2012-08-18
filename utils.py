import ephem


def get_rise_and_set_time(body, location):
    year, month, day = location.date.triple()
    start_date = ephem.date((year, month, int(day)))
    rising = ephem.localtime(location.next_rising(body, start=start_date))
    setting = ephem.localtime(location.next_setting(body, start=start_date))
    return (rising, setting)
